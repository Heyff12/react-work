/** @format */

import React, {useState} from 'react'
import {message} from 'antd'

import {EXCEL_TYPE} from '../../constants'

const uploadBillsAjax = (data: any) => {
  return Promise.resolve(data)
}

export const FILE_ERROR_STR = {
  type: '上传的文件不是一个有效的Excel文档文件',
  size: '上传的文件大小不能超过2M',
}
const FILE_SIZE = 2 * 1024 * 1024
const initUploadState = {
  canSureUpload: false,
  fileName: '',
  fileData: '',
  uploadErrorText: '',
}

function UploadTest() {
  const [uploadState, setUploadState] = useState(initUploadState)

  const downloadExcel = (res: any) => {
    const {data, headers} = res
    const contentType = headers['content-type']
    const contentDisposition = headers['content-disposition']
    const reg = /filename=(.*)]/
    const filename = contentDisposition.match(reg)[1]
    const blob = new Blob([data], {type: contentType})
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename)
      return
    }
    let downloadElement = document.createElement('a')
    document.body.appendChild(downloadElement)
    let href = window.URL.createObjectURL(blob)
    downloadElement.href = href
    downloadElement.download = filename
    downloadElement.style.display = 'none'
    downloadElement.click()
    document.body.removeChild(downloadElement)
    window.URL.revokeObjectURL(href)
  }

  const uploadSureHandle = () => {
    const {fileData} = uploadState
    let dataPost = new FormData()
    dataPost.append('file', fileData)
    uploadBillsAjax(dataPost)
      .then(() => {
        message.success('上传账单成功')
        setUploadState(initUploadState)
      })
      .catch(error => {
        if (error.response.status === 401) {
          return
        }
        if (error.response.status === 412) {
          setUploadState({
            canSureUpload: false,
            fileName: '',
            uploadErrorText: error.response.data,
            fileData: '',
          })
          return
        }
        if (error.response.status === 400) {
          message.error('上传失败，请下载错误文件，修改后重新上传')
          setUploadState(initUploadState)
          downloadExcel(error.response)
          return
        }
        message.error('上传失败')
        setUploadState(initUploadState)
      })
      .finally(() => {})
  }
  const uploadHandle = (e: any) => {
    const file = e.target.files[0]
    const {name, type, size} = file
    const isExcel = EXCEL_TYPE.includes(type)
    if (!isExcel) {
      setUploadState({
        canSureUpload: false,
        fileName: '',
        uploadErrorText: FILE_ERROR_STR['type'],
        fileData: '',
      })
      return
    }
    if (size > FILE_SIZE) {
      setUploadState({
        canSureUpload: false,
        fileName: '',
        uploadErrorText: FILE_ERROR_STR['size'],
        fileData: '',
      })
      return
    }
    setUploadState({
      canSureUpload: true,
      fileName: name,
      uploadErrorText: '',
      fileData: file,
    })
    uploadSureHandle()
  }

  return (
    <div>
      <input
        type="file"
        className="uploadInput"
        alt=""
        title=""
        name="upload"
        onChange={uploadHandle}
        accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      />
    </div>
  )
}

export default UploadTest

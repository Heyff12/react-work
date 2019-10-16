/** @format */

import React, {useState} from 'react'
import {Icon, message} from 'antd'
import CustomModal from '../../../components/custom-modal/index'
import {EXCEL_TYPE} from '../../../constants'
import {uploadBillsAjax} from '../../../service/bill-service'

// import '../../../resource/styles/customModal.less'

interface IProps {
  showModal: boolean
  setShowModal: (val: boolean) => void
  downTemplete: () => void
  getBillLists: () => void
  setGlobleLoading: (loading: boolean) => void
}

const initUploadState = {
  canSureUpload: false,
  fileName: '',
  fileData: '',
  uploadErrorText: '',
}
export const FILE_ERROR_STR = {
  type: '上传的文件不是一个有效的Excel文档文件',
  size: '上传的文件大小不能超过2M',
}

const FILE_SIZE = 2 * 1024 * 1024

const UploadModal = (props: IProps) => {
  const {
    getBillLists,
    setGlobleLoading,
    showModal,
    downTemplete,
    setShowModal,
  } = props

  const [uploadState, setUploadState] = useState(initUploadState)

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
  }

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
  const arrayBufferToString = (res: any) => {
    const {data} = res
    let blob = new Blob([data]) //然后使用fileReader对象进行数据转换和输出

    let reader = new FileReader()

    reader.readAsText(blob, 'utf-8')

    reader.onload = function() {
      let errStr = reader.result

      console.log(reader.result)
      setUploadState({
        canSureUpload: false,
        fileName: '',
        uploadErrorText: `${errStr}`,
        fileData: '',
      }) //输出文字
    }
  }
  const uploadSureHandle = () => {
    const {fileData} = uploadState
    setShowModal(false)
    setGlobleLoading(true)
    let dataPost = new FormData()
    dataPost.append('file', fileData)
    uploadBillsAjax(dataPost)
      .then(() => {
        message.success('上传账单成功')
        setUploadState(initUploadState)
        getBillLists()
      })
      .catch(error => {
        if (error.response.status === 401) {
          return
        }
        if (error.response.status === 412) {
          setShowModal(true)
          arrayBufferToString(error.response)

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
      .finally(() => {
        setGlobleLoading(false)
      })
  }

  const uploadCancleHandle = () => {
    setUploadState(initUploadState)
    setShowModal(false)
  }

  const renderModalDetail = () => {
    const {canSureUpload, fileName, uploadErrorText} = uploadState

    return (
      <dl className="custom-modal">
        <dt>
          <Icon type="info-circle" theme="filled" />
          <span className="dt-title">
            {uploadErrorText ? '上传失败，请重试' : '请选择上传文件'}
          </span>
        </dt>
        <dd>
          <div className="firstLine">
            {canSureUpload ? (
              <span className="filename-text">{fileName}</span>
            ) : (
              <span className="button-text">选择文件</span>
            )}
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
          {uploadErrorText ? (
            <div className="err-tips">{uploadErrorText}</div>
          ) : (
            <div className="tips">
              账单文件需要以
              <span className="down" onClick={downTemplete}>
                模板
              </span>
              格式上传。若账单内容有误，系统将自动生成并下载一个错误说明文件
            </div>
          )}
        </dd>
      </dl>
    )
  }

  return (
    <CustomModal
      visible={showModal}
      onHandleOk={uploadSureHandle}
      onHandleCancel={uploadCancleHandle}
      okButtonProps={{disabled: !uploadState.canSureUpload}}>
      {renderModalDetail()}
    </CustomModal>
  )
}

export default UploadModal

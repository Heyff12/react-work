/** @format */

import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
import get from 'lodash-es/get'
import includes from 'lodash-es/includes'

const api = axios.create({
  timeout: 10 * 1000,
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
  const url = config.url || ''
  console.log(url)

  return config
})

api.interceptors.response.use(
  (res: AxiosResponse) => {
    return res
  },
  (error: AxiosError) => {
    const status = get(error, 'response.status')
    if (includes([403, 404], status)) {
      window.location.replace(`${window.location.origin}/mobile/#/${status}`)
    }

    return Promise.reject(error)
  },
)

export default api

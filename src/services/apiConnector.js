import axios from "axios"

export const axiosInstance = axios.create({})

export const apiConnector = (method, url, bodyData, headers, params) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  }
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: { ...defaultHeaders, ...headers },
    params: params ? params : null,
  })
}

// headers ? headers : null,

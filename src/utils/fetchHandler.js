import axios from 'axios'

const fetchHandler = ({
  method = 'GET',
  url = '/api/v1/info',
  body = null,
  auth = false,
}) => {
  const request = {
    method: method,
    url: `http://localhost:5050${url}`,
  }
  if (body) {
    request.data = body
  }
  if (auth) {
    request.headers = {
      Authorization: localStorage.getItem('token'),
    }
  }
  return axios(request)
}

export default fetchHandler

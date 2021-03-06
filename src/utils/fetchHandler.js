import axios from 'axios'

const fetchHandler = ({
  method = 'GET',
  url = '/api/v1/info',
  body = null,
  auth = false,
}) => {
  const request = {
    method: method,
    url: `https://backend.ib.org.au${url}`,
    // url: `http://127.0.0.1:5000${url}`,
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

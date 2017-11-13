import axios from 'axios'
//define conector para a API
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/api/`
  })
}
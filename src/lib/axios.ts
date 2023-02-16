import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://apiplanexcon.com.br:50122'
})
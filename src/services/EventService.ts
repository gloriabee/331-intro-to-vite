import axios, { Axios, type AxiosResponse } from 'axios'
const apiClient = axios.create({
  //   baseURL: 'https://my-json-server.typicode.com/gloriabee/my_Json',
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: Number, page: Number) {
    return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id)
  },
  saveEvent(event: Event) {
    return apiClient.post('/events', event)
  }
}

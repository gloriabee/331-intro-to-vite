import axios, { Axios, type AxiosResponse } from "axios";
const apiClient=axios.create({
    baseURL: 'https://my-json-server.typicode.com/gloriabee/my_Json',
    withCredentials: false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default{
    getEvents(){
        return apiClient.get('/events')
    },
    getEvent(id:number){
        return apiClient.get('/events/'+id)
    }
        
}
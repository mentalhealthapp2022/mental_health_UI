import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as RootNavigator from '../extension/RootNavigator';
import Config from 'react-native-config'
import { setAsyncData,getAsyncData } from '../extension/ApiUtils'

async function getRefreshToken() {
    const token = await getAsyncData('token');
    const refreshToken = await getAsyncData('refresh')
    axiosInstance.post("auth/refreshtoken", { token: token, refreshToken: refreshToken }).then((response) => {
        try {
            if (response.status == 401) {
                const keys = ['token', 'refreshToken', 'userId', 'firstName', 'lastName', 'gender', "imgUrl"]
                AsyncStorage.multiRemove(keys)
                RootNavigator.replace('Login', {})
            } else {
                if(response.status == 200){
                    setAsyncData('token', response.data.token)
                    setAsyncData('refreshToken', response.data.refreshToken)
                }
               
            }
        } catch (e) {
            //console.log(e);
        }
    }).then((err) => {
        //console.log("ERR===>" + err);
    })
}

let headers = {};
const axiosInstance = axios.create({
    baseURL: "https://mental-health.onrender.com/v1/",
    headers,
});

axiosInstance.interceptors.request.use(async (config) => {
    console.log("+++++")
    const token = await getAsyncData('token');
    if (token) {
        console.log("------")
        config.headers.Authorization = `Bearer ${token}`
    }
    console.log("@@@ ",config);
    return config;
}, (error) => {
    console.log("sjgcvakshgd");
    return Promise.reject(error)
});

axiosInstance.interceptors.response.use(response => new Promise((resolve, reject) => {
    console.log("REs ",response.data);
    resolve(response.data)
}), error => {
    if (!error.response) {
        return Promise.reject(error)       
    }

    if (error.response.status === 401 && error.response.config.url === 'auth/refreshtoken') {
        return Promise.resolve(error.response)       
    }

    if (error.response.status === 401) {
        getRefreshToken();
    } else {
        return Promise.resolve(error.response)  
    }
})

export default axiosInstance
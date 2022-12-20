import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from './AxiosInstance';
import CryptoJS from "react-native-crypto-js";

export const checkToken = async () => {
  try {
    const token = await getAsyncData('token')
    return token
  } catch (error) {
    //console.log(error);
  }
}

export const setAsyncData = async (key, value) => {
  var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(value), '4c327fd39be2f134e04b3d3ee0716a0d47343428');

  try {
    await AsyncStorage.setItem(key, ciphertext.toString())
  } catch (error) {
    //console.log("setAsync",error);
  }
}

export const getAsyncData = async (key) => {
  try {
    const getDataHelper = await AsyncStorage.getItem(key)
    if (getDataHelper == null) {
      return null
    }
    var bytes = CryptoJS.AES.decrypt(getDataHelper, '4c327fd39be2f134e04b3d3ee0716a0d47343428');
    var plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return JSON.parse(plaintext)

  }
  catch (error) {
    //console.log(key + "<<<<<error>>>> " +  error);
  }
}


export const getDocumentBlob = async (url, fileName) => {
  try {
    const data = await axiosInstance.get("user/getdocument?url=" + url + "&fileName=" + fileName).then((response) => {
      return response.data
    })
    return data
  } catch (error) {
    //console.log(error);
  }
}

export const getRelations = async () => {
  try {
    const data = await axiosInstance.get("user/familymembers").then((response) => {
      return response.data
    })
    return data
  } catch (error) {
    // console.log(error);
  }
}

import {getResponseData} from './utils'

export const BASE_URL = 'https://auth.nomoreparties.co';

export const headers = {
  'Content-Type': 'application/json'
};

export function registration({ email, password }){
  return fetch(`${BASE_URL}/signup`, {
        method : 'POST',
        headers : {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          "password": email,
          "email": password
        })
        .then(result => getResponseData({result}))
      })
}

export function login(){
  
}
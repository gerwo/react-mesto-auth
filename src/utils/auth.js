
import {getResponseData} from './utils'

export const BASE_URL = 'https://auth.nomoreparties.co';

export const headers = {
  'Content-Type': 'application/json'
};

export function register({ email, password }){
  return fetch(`${BASE_URL}/signup`, {
      method : 'POST',
      headers,
      body : JSON.stringify({
        email, password
      })
  }).then(result => getResponseData(result));
}

export function login({email, password}){
  return fetch(`${BASE_URL}/signin`, {
      method : 'POST',
      headers,
      body : JSON.stringify({
        email, password
      })
  }).then(result => getResponseData(result));
}

export function checkUserToken(jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      ...headers,
      'Authorization' : `Bearer ${jwt}`
    },
  })
    .then((res) => getResponseData(res))
}
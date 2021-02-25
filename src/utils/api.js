class Api{
  
  constructor({url, headers}){
    this._url = url;
    this._headers = headers;
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
      })
      .then(result => this._getResponseData({result}));
  }

  addCard({name, link}){
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body : JSON.stringify({
        name: name,
        link : link 
      })
    })
      .then(result => this._getResponseData({result}));
  }

  getUserInfo(){
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
      })
      .then(result => this._getResponseData({result}));
  }

  setUserInfo({name, about}){
    return fetch(`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body : JSON.stringify({name, about})
      })
      .then(result => this._getResponseData({result}));
  }

  setUserAvatar({avatar}) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body : JSON.stringify({avatar})
    })
      .then(result => this._getResponseData({result}));
  }
  
  deleteCard({cardId}) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(result => this._getResponseData({result}));
  }

  changeLikeCardStatus({cardId, isLiked}){

    return fetch(`${this._url}/cards/likes/${cardId}`, {
      method: isLiked ? 'PUT' : 'DELETE',
      headers: this._headers
    })
      .then(result => this._getResponseData({result}));
  }

  _getResponseData({result}){
    return result.ok ? result.json() : Promise.reject(new Error(`Ошибка ${result.status}`));
  }
}


const api = new Api({
  url : 'https://mesto.nomoreparties.co/v1/cohort-19',
  headers :{
    authorization : 'a2645d68-6dae-4ace-a29b-319c06bb5839',
    'Content-Type' : 'application/json'
  }
});

export default api;

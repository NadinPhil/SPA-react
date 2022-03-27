class Api {
constructor({url, headers}){
    this._url = url;
    this._headers = headers;
}

_checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
  return Promise.reject('Сервер не доступен')
}

//получение списка карточек в виде массива
getAllCards(){
return fetch ( `${this._url}/photos`, {
    method: "GET",
    headers:  this._headers,
})
.then(this._checkResponse)
}  
    

//удаление карточки 
removeCard(cardId){
    return fetch ( `${this._url}/photos/${cardId}`, {
        method: "DELETE",
        headers:  this._headers,
    })
    .then(this._checkResponse)
    }

}

const api = new Api({
    url: 'http://jsonplaceholder.typicode.com',
    headers: {
        "content-type": "application/json"
      }
});

export default api; 
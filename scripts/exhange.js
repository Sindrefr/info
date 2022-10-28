let myHeaders = new Headers();
myHeaders.append("apikey", "O2CJidE0GZfoX3kEGI8nj0N7YjkFwcDJ");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("ttps://api.apilayer.com/exchangerates_data/convert?to=USD&from=EUR&amount=5", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
let myHeaders = new Headers();
myHeaders.append("apikey", "O2CJidE0GZfoX3kEGI8nj0N7YjkFwcDJ");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const add = `?to=${data[2]}&from=${data[1]}&amount=${data[0]}`;

fetch("https://api.apilayer.com/exchangerates_data/convert", add, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

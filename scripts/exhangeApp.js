const amountForm = document.querySelector("#amount");
const fromCurrington = document.querySelector("#from");
const toCurrington = document.querySelector("#to");
const form = document.querySelector("#convert");

form.addEventListener("submit", e => {
    e.preventDefault();
    from = from.value;
    to = to.value;
    amount = amount.value;
    return from, to, amount;
});


let myHeaders = new Headers();
myHeaders.append("apikey", "O2CJidE0GZfoX3kEGI8nj0N7YjkFwcDJ");

let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,  requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

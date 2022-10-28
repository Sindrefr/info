const amountForm = document.querySelector("#amountForm");
const fromForm = document.querySelector("#fromForm");
const toForm = document.querySelector("#toForm");
const buttonPress = document.querySelector("#buttonPress");

buttonPress.addEventListener("click", e => {
    e.preventDefault;
    amountForm.value;
    fromForm.value;
    toForm.value;
    data = amountForm.value + fromForm.value + toForm.value;
    return data;
});
const amountForm = document.querySelector("#convert")
const fromForm = document.querySelector("#from")
const toForm = document.querySelector("#to")
amountForm.getElementsByID("convert", e => {
    e.preventDefault();
    console.log("submit event fired");
    console.log(amountForm["amount"].value)
});
fromForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("submit event fired");
    console.log(fromForm["amount"].value)
});
toForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("submit event fired");
    console.log(toForm["amount"].value)
});
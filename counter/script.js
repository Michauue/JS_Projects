const number = document.querySelector('.numb');

let temp = parseInt(number.textContent);

console.log(temp);

function onDec() {
    number.textContent = parseInt(number.textContent)-1;
}
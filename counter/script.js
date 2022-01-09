const numb = document.querySelector('.numb');
const number = document.getElementById('number');
const picture = document.getElementById('img');

function onDec() {
    numb.textContent = parseInt(numb.textContent)-1;
    checkValue();
}
function onRes() {
    numb.textContent = 0;
    checkValue();
}
function onInc() {
    numb.textContent = parseInt(numb.textContent)+1;
    checkValue();
}

function checkValue() {
    if (parseInt(numb.textContent) > 0) {
        number.style.color = "green";
    } else if (parseInt(numb.textContent) < 0) {
        number.style.color = "red";
    } else {
        number.style.color = "black";
    }
    if (parseInt(numb.textContent) == 12) {
        picture.style.visibility = "visible";
    } else {
        picture.style.visibility = "hidden";
    }
}

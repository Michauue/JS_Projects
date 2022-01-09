const background = document.querySelector(".bgc")
const button = document.getElementById("button")

let tab = ['a', 'b', 'c', 'd', 'e', 'f']
for (let i=1; i<10; i++) {
    tab.push(i)
}
console.log(tab)

function onOver() {
    button.style.background = "#5dad0d"
}

function onOut() {
    button.style.background = "chartreuse"
}

function randomizer() {
    let color = "#"
    for (let i=0; i<6; i++) {
        let number = Math.floor(Math.random()*tab.length)
        color = color + tab[number]
    }
    return color;
}

function colorChange() {
    let temp = randomizer()
    document.body.style.background = temp
    background.textContent = temp
    background.style.color = temp
    console.log(temp)
}

button.addEventListener("click", colorChange)
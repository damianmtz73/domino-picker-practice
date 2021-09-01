
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}



let dominoList= document.querySelectorAll(".domino-list > li")

let firstIndex= 0
let lastIndex= dominoList.length-1

let randomIndex= getRandomNumber(firstIndex, lastIndex) 

let randomDominoElement= dominoList[randomIndex]

randomDominoElement.classList.add("selected")
 
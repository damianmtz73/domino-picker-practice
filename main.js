
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}



// let dominoList= document.querySelectorAll(".domino-list > li")


let dominoCharacters='🁣🁤🁥🁦🁧🁨🁩🁪🁫🁬🁭🁮🁯🁰🁱🁲🁳🁴🁵🁶🁷🁸🁹🁺🁻🁼🁽🁾🁿🂀🂁🂂🂃🂄🂅🂆🂇🂈🂉🂊🂋🂌🂍🂎🂏🂐🂑🂒🂓'
let dominoList= Array.from(dominoCharacters)

let firstIndex= 0
let lastIndex= dominoList.length-1
let randomIndex= getRandomNumber(firstIndex, lastIndex) 
let randomDominoCharacter= dominoList[randomIndex]

for(let index = 0; index < dominoList.length; index+=1){
    let currentDomino= dominoList[index]
    
    let dominoElement= document.createElement("div")
dominoElement.append(currentDomino)
dominoElement.classList.add("domino") 

let mainElement= document.querySelector("main")
mainElement.append(dominoElement )

if (currentDomino === randomDominoCharacter){
    dominoElement.classList.add("selected")
}

}

 
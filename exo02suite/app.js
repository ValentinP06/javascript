const hexaList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexNumbers = hexaList.splice(0,10);
const hexLetters = hexaList;

const randomInt = function(table){
    let max = table.length; 
    let index = Math.floor(Math.random() * max);
    return table[index];
}

const letterLen = hexLetters.length;
const numberLen = hexNumbers.length;

const text = document.querySelector("#text");
const btn = document.querySelector("#bretton");
const bgColor = document.querySelector("#bgColor");

btn.addEventListener("click", function () {

    let l1 = randomInt(hexLetters);
    let l2 = randomInt(hexLetters);
    let l3 = randomInt(hexLetters);

    let n1 = randomInt(hexNumbers);
    let n2 = randomInt(hexNumbers);
    let n3 = randomInt(hexNumbers);

    changeColor = `#${l1}${l2}${l3}${n1}${n2}${n3}`
    bgColor.innerText = "Background color: " + changeColor;

    text.style.backgroundColor = changeColor;
})
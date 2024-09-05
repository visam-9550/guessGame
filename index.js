const inputValueElement = document.getElementById('inputValue')
const resultparagraph = document.getElementById("resultparagraph")
let clickOnCeheckButton = function(){
    const generateNumber = Math.random() * 2
    const randomNumber = Math.ceil(generateNumber)
    console.log(randomNumber)
    let inputValue = inputValueElement.value
    if (parseInt(inputValue) === randomNumber){
        resultparagraph.textContent = "Congrates! You did it..."
        inputValueElement.value = ""
    }else{
        resultparagraph.textContent = "Better luck next time!"
        inputValueElement.value = ""
    }
}
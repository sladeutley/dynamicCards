// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

let inputField = document.getElementById("userInput");
let createButton = document.getElementById("createButton");
let output = document.getElementById("output");

const printMessage = (userText) =>{
    let newCardElement = document.createElement("div");
    console.log(newCardElement);
    let userOutput = document.createTextNode(inputField.value); //put string in the parentheses, or in this case, put user's text in.d
    console.log(userOutput);
    output.innerHTML += userOutput;
    // output.innerHTML += inputField.value;
}

createButton.addEventListener("click", printMessage);



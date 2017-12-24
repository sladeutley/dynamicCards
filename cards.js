// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM that includes it's own delete button. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

let inputField = document.getElementById("userInput");
let createButton = document.getElementById("createButton");
let output = document.getElementById("output");

const printMessage = (userText) =>{
    let newCardElement = document.createElement("div"); //creates new div
    newCardElement.setAttribute("id", "newOutputDiv"); //gives new element id, class, etc.
    console.log(newCardElement);
    let userOutput = document.createTextNode(`${inputField.value} `); //put string in the parentheses, or in this case, put user's text in.
    console.log(userOutput);
    newCardElement.appendChild(userOutput); //places text node within new div
    let deleteButton = document.createElement("button"); //creates button html element
    deleteButton.setAttribute("id", "deleteUserInput") //give delete button id
    deleteButton.innerHTML += `delete`; // writes delete to dom with "button" element
    newCardElement.appendChild(deleteButton); //places delete button with new div created at top
    console.log(deleteButton);
    // output.innerHTML += inputField.value;
    output.appendChild(newCardElement); //puts new div created at top within a div established in the html
    inputField.value = ""; //sets user input to blank
    const deleteCard = () => output.removeChild(newCardElement); //deletes card just added
    deleteButton.addEventListener("click", deleteCard);

};
// NOT WORKING AND CAN'T FIGURE OUT!
// let pressingEnter = () => {
//     let userText = document.getElementById("userInput");
//     userText.addEventListener('keypress', function (e) {
//     let key = e.keyCode;
//     if (key === 13) {
//         console.log("enter key working");
//         printMessage();
//     }
//     });
// }; 

createButton.addEventListener("click", printMessage);





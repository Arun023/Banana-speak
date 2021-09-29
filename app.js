var textTranslate = document.querySelector("#txt-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");


function clickHandler() {
    outputDiv.innerText = "Arun Loves " + txtInput.value;
};

textTranslate.addEventListener("click", clickHandler)
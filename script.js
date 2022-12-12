// Get definition for top half of card
let storeTerms = [];
const addTerm = (ev) => {
    ev.preventDefault();
    
    let addTerms = {
        term: document.querySelector("#fterm").value,
        definition: document.querySelector("#fdefi").value
    }

// Check if term is "" -> Remove if nothing
    if (addTerms.value == "" || addTerms.definition == "") {
        alert('try again');
    } else {
    storeTerms += JSON.stringify(addTerms);
    let logUserInput = document.querySelector("#termsAdded pre");
    logUserInput.textContent += addTerms.term + "has been added\n";
    }
    document.forms[0].reset();


}
window.onload = () => {

    document.getElementById("createButton").addEventListener('click', addTerm);
    // let getDefinition = document.querySelector("#definition");
    // getDefinition.textContent = addTerms.definition;
}




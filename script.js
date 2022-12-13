// Get definition for top half of card
let storeTerms = [];
let count = 0;

const addTerm = (ev) => {
    ev.preventDefault();
    
    let addTerms = {
        number: count++,
        term: document.querySelector("#fterm").value,
        definition: document.querySelector("#fdefi").value
    }

// Check if term is "" -> Remove if nothing
    if (addTerms.value == "" || addTerms.definition == "") {
        alert('try again');
    } else {
    storeTerms += JSON.stringify(addTerms);
    let logUserInput = document.querySelector("#termsAdded pre");
    logUserInput.textContent += addTerms.term + " has been added\n";
    }
    document.forms[0].reset();


}
window.onload = () => {
    // start game
    let readyBtn = document.getElementById("readyBtn");
    document.addEventListener('click', startGame);

    // Submit form button
    document.getElementById("createButton").addEventListener('click', addTerm);
    // let getDefinition = document.querySelector("#definition");
    // getDefinition.textContent = addTerms.definition;
}




// Have each as a number so to get one term it would be 3.term
// Have a correct and wrong box / array. Move them into those if correct or even have 2 sets of correctness. One for getting it right, another for writing the term and getting it right
// Have a override i was correct button


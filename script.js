// Get definition for top half of card
let storeTerms = [];
let count = 0;

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
    logUserInput.textContent += addTerms.term + " has been added\n";
    count++;
    
    // make sure numbers aren't repeated
    if (count!=0) {
        let numberAlready = localStorage.length;
        for (let i = 0; i <= numberAlready; i++) {
            count++;
        }
        localStorage.setItem(JSON.stringify(count), storeTerms);
    } 
    else {
        localStorage.setItem(JSON.stringify(count),storeTerms);
    }
    }
    document.forms[0].reset();
    

}
let term1 = document.querySelector("#term-one");
let term2 = docuemtn.querSelector("#term-two");
let term3 = docuemtn.querSelector("#term-three");
let term4 = docuemtn.querSelector("#term-four");
function startGame() {
    if (count < 4) {
        alert('You have less than 4 terms');
        } else {
    
        }    
}


window.onload = () => {
    // start game
    let readyBtn = document.getElementById("readyBtn");
    readyBtn.addEventListener('click', startGame); //remove the button when game starts or change it to stop game // alert stopping the game will remove all your terms

    // Submit form button
    document.getElementById("createButton").addEventListener('click', addTerm);
    // let getDefinition = document.querySelector("#definition");
    // getDefinition.textContent = addTerms.definition;
}




// Have each as a number so to get one term it would be 3.term
// Have a correct and wrong box / array. Move them into those if correct or even have 2 sets of correctness. One for getting it right, another for writing the term and getting it right
// Have a override i was correct button


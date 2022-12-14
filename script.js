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
        let numberAlready = localStorage.length-1;
        for (let i = 0; i < numberAlready; i++) {
            count = localStorage.length + 1;
        }
        localStorage.setItem(count, storeTerms);
    } 
    else {
        localStorage.setItem(count, storeTerms);
    }
    }
    document.forms[0].reset();
    

}

const term1 = document.querySelector("#term-one");
const term2 = document.querySelector("#term-two");
const term3 = document.querySelector("#term-three");
const term4 = document.querySelector("#term-four");
function startGame() {
    if (count < 4) {
        alert('You have less than 4 terms');
        } else {
        readyBtn.style.display = "none";
        stopBtn.style.display = "block";
        // function for randomizing terms
        // let getDefinition = document.querySelector("#definition");
        // for (let k = 0; k < localStorage.length-1; k++) {
        // let randomNumber = Math.floor(Math.random() * localStorage.length-1);
        // let getKey = localStorage.key(randomNumber);
        // let getAnswerDefiniton = JSON.parse(localStorage.getItem(getKey));
        // getDefinition.innerHTML = getAnswerDefiniton.definition;
    
        // }
    }    
}
function stopGame() {
    let userStopGameInput = prompt('You will lose your progress and terms, "yes" or "no"');
    if (userStopGameInput == 'yes') {
        location.reload();
    } else if (userStopGameInput == 'no') {
        startGame();
    } else {
        alert('Please enter "yes" or "no"');
    }
}
function clearEverything() {
    localStorage.clear();
    count = 0;
    document.querySelector("#termsAdded pre").innerHTML = '';
}



window.onload = () => {
    // start game
    let readyBtn = document.getElementById("readyBtn");
    readyBtn.addEventListener('click', startGame); //remove the button when game starts or change it to stop game // alert stopping the game will remove all your terms
    let stopBtn = document.querySelector("#stopBtn");
    stopBtn.addEventListener('click', stopGame);
    let clearLog = document.querySelector("#clearLog");
    clearLog.addEventListener('click', clearEverything);

    // Submit form button
    document.getElementById("createButton").addEventListener('click', addTerm);
        
}




// Have each as a number so to get one term it would be 3.term
// Have a correct and wrong box / array. Move them into those if correct or even have 2 sets of correctness. One for getting it right, another for writing the term and getting it right
// Have a override i was correct button

// Get definition for top half of card
let storeTerms = [];

const addTerm = (ev) => {
    ev.preventDefault();
    
    let addTerms = {
        // number: count,
        term: document.querySelector("#fterm").value,
        definition: document.querySelector("#fdefi").value
    }

// Check if term is "" -> Remove if nothing
    if (addTerms.value == "" || addTerms.definition == "") {
        alert('try again');
    } 
    else {
        storeTerms.push(addTerms);
        let logUserInput = document.querySelector("#termsAdded pre");
        logUserInput.textContent += addTerms.term + " has been added\n";
        
        localStorage.setItem('gameCards', JSON.stringify(storeTerms));
    }
    document.forms[0].reset();
    

}

const term1 = document.querySelector("#term-one");
const term2 = document.querySelector("#term-two");
const term3 = document.querySelector("#term-three");
const term4 = document.querySelector("#term-four");

function randomizeCard() {
    const getDefinition = document.querySelector("#definition");
    let parsonWord = JSON.parse(localStorage.getItem('gameCards'));
    const determinedNumber = Math.floor(Math.random() * parsonWord.length);
    const determinedDefinition = parsonWord[determinedNumber].definition;
    getDefinition.innerHTML = determinedDefinition;

    for (let k = 0; k < parsonWord.length; k++) {
        let randomNumber = Math.floor(Math.random() * parsonWord.length);
        let randomDefinition = parsonWord[randomNumber].definition;
        if (getDefinition.innerHTML != determinedDefinition) {
            term[k].innerHTML = randomDefinition; //this would be a cool function
        } else {
            term[k].innerHTML = determinedDefinition;
        }
    }
    
}
function startGame() {
    if (JSON.parse(localStorage.getItem('gameCards')).length < 4) {
        alert('You have less than 4 terms');
        } 
    else {
        readyBtn.style.display = "none";
        stopBtn.style.display = "block";
        // function for randomizing terms
        randomizeCard();
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

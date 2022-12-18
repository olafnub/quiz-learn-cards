// Get definition for top half of card
let storeTerms = [];
let correctTerms = [];
let numbersGiven = 0;
let storeUserInput; // title
let secondTimeUser;

function storeUserValue() {
    storeUserInput = listOfCards.value;
}

function addGameCards() {
// Goal is to add a title that isn't already in local Storage. If it is then keep the .value as that title unless it's
    let toAddTitle = true;
    if (localStorage.length != 0) {
        for (let j = 0; j < localStorage.length; j++) {
            if (storeUserInput.indexOf(localStorage.key(j)) != 0) {
                toAddTitle = false;
            }
            else {
                addOrDont = true;
            }
        }
    }
    
    if (toAddTitle == true) {
        localStorage.setItem(storeUserInput, JSON.stringify(storeTerms)); 
    }  

}

const addTerm = (ev) => {
    ev.preventDefault();
    
    let addTerms = {
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
        // $('#vocabulary').forms[0].reset();
        let vocabForm = document.getElementsByName("vocabulary")[0];
        vocabForm.reset();
        addGameCards();
        
    }
    
    

}
let term1;
let term2;
let term3;
let term4;

let arrayDefinition;
let getDefinition;
let determinedNumber;
let determinedDefinition;
let determinedTerm;

let arrayNumbers;

// Sets definiton for top card
function setTopCardDefinition() {
    getDefinition = document.querySelector("#definition");
    storeTerms = JSON.parse(localStorage.getItem(storeUserInput));
    determinedNumber = Math.floor(Math.random() * storeTerms.length);
    determinedDefinition = storeTerms[determinedNumber].definition;
    determinedTerm = storeTerms[determinedNumber].term;
    getDefinition.innerHTML = determinedTerm;
}
 // Gives all cards a definiton
 function giveAllDefinittion() {
    arrayDefinition = [];
    arrayNumbers = [];
    
    let term1Switch = true;
    let term2Switch = true;
    let term3Switch = true;
    let term4Switch = true;

    for (let i = 0; i < storeTerms.length; i++) {
        arrayDefinition.push(storeTerms[i].definition);
    }

    for (let j = 0; j < 20; j++) {
        let insideRandom = Math.floor(Math.random() * storeTerms.length);

        if (arrayNumbers.indexOf(insideRandom) == -1) {
            if (term1Switch == true) {
                term1.innerHTML = arrayDefinition[insideRandom];
                arrayNumbers.push(insideRandom);
                term1Switch = false;
            }
            else if (term2Switch == true) {
                term2.innerHTML = arrayDefinition[insideRandom];
                arrayNumbers.push(insideRandom);
                term2Switch = false;
            }
            else if (term3Switch == true) {
                term3.innerHTML = arrayDefinition[insideRandom];
                arrayNumbers.push(insideRandom);
                term3Switch = false;
            }
            else if (term4Switch == true) {
                term4.innerHTML = arrayDefinition[insideRandom];
                arrayNumbers.push(insideRandom);
                term4Switch = false;
            }

        }

    }
}

// Sets one random bottom term as the actual definition if false
let randomNumber = Math.floor(Math.random() * storeTerms.length);
function randomBottom() {

    if (randomNumber == 0) {
        term1.innerHTML = determinedDefinition;
    } 
    else if (randomNumber == 1) {
        term2.innerHTML = determinedDefinition;
    }
    else if (randomNumber == 2) {
        term3.innerHTML = determinedDefinition;
    } 
    else if (randomNumber ==3) {
        term4.innerHTML = determinedDefinition;
    }
}
    
function randomizeCard() {
    term1 = document.querySelector("#term-one");
    term2 = document.querySelector("#term-two");
    term3 = document.querySelector("#term-three");
    term4 = document.querySelector("#term-four");

    setTopCardDefinition();

    giveAllDefinittion();

    // Checks if the actual term is in the cards // 
    let randomBottomSwitch = false;
    for (let t = 0; t < storeTerms.length; t++) {
        if (determinedDefinition == arrayDefinition[arrayNumbers[t]]) {
            randomBottomSwitch = true;
        } 
        
    }
     // Sets one random bottom term as the actual definition if false
     if (randomBottomSwitch == true) {
        
     }
     else {
        randomBottom();
     }

    // Check to equal the definition with term
    checkCards();
    
}

let listenerCount = 0;
function checkCards() {

    if (listenerCount == 0) {
        term1.addEventListener('click', function() {
            checkIfEquals(term1.innerHTML);
        });
        term2.addEventListener('click', function() {
            checkIfEquals(term2.innerHTML)
        });
        term3.addEventListener('click', function() {
            checkIfEquals(term3.innerHTML)
        });
        term4.addEventListener('click', function() {
            checkIfEquals(term4.innerHTML)
        });
    }

    function checkIfEquals(wordGiven) {
        if (determinedDefinition == wordGiven) {
            correctTerms.push(determinedTerm);
            alert('correct!');
            listenerCount = 1;
            reloadGame();
        }
        else {
            // if (randomNumber == 0) {
            //     alert('close!');
            // }
            // else if (randomNumber == 1) {
            //     alert('try again!');
            // }
            // else {
            //     alert('almost there!');
            // }
            alert('try again, you got this!');
            
        }
    }

}


function reloadGame() {
    setTopCardDefinition();

    let runThisCode = true;
    for (let a = 0; a <correctTerms.length; a++) {
        if (determinedDefinition.indexOf(correctTerms[a]) == 1) {
            setTopCardDefinition();
            runThisCode = false;
        } 
    }

    if (runThisCode == true) {
        randomizeCard();
    }




    // let stopThisTrue = true;
    // let amount = 0;
    // while (stopThisTrue == true) {
    //         if (determinedTerm.indexOf(correctTerms[amount]) == 1) {
    //             setTopCardDefinition();
    //             stopThisTrue = true;
    //             console.log(correctTerms);
    //         }
    //         else {
    //             stopThisTrue = false;
    //             randomizeCard();
    //             // giveAllDefinittion();
    //             // randomBottom();
    //         }
        
    // }  
}

function startGame() {
    if (JSON.parse(localStorage.getItem(storeUserInput)).length < 4) {
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
    if (userStopGameInput == 'yes' || 'stop') {
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



window.onload=function() {
    // start game
    let readyBtn = document.getElementById("readyBtn");
    readyBtn.addEventListener('click', startGame); //remove the button when game starts or change it to stop game // alert stopping the game will remove all your terms
    let stopBtn = document.querySelector("#stopBtn");
    stopBtn.addEventListener('click', stopGame);
    let clearLog = document.querySelector("#clearLog");
    clearLog.addEventListener('click', clearEverything);

    // Submit form button
    document.getElementById("createButton").addEventListener('click', addTerm);
    let listOfCards = document.getElementById("listOfCards");
    listOfCards.addEventListener("change", storeUserValue);

        
}




// Have each as a number so to get one term it would be 3.term
// Have a correct and wrong box / array. Move them into those if correct or even have 2 sets of correctness. One for getting it right, another for writing the term and getting it right
// Have a override i was correct button

// const term1 = document.querySelector("#term-one");
//     const term2 = document.querySelector("#term-two");
//     const term3 = document.querySelector("#term-three");
//     const term4 = document.querySelector("#term-four");
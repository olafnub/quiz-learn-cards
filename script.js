// Get definition for top half of card
let storeTerms = [];
let correctTerms = [];

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
    
function randomizeCard() {
    const term1 = document.querySelector("#term-one");
    const term2 = document.querySelector("#term-two");
    const term3 = document.querySelector("#term-three");
    const term4 = document.querySelector("#term-four");
    // Sets definiton for top card
    const getDefinition = document.querySelector("#definition");
    storeTerms = JSON.parse(localStorage.getItem('gameCards'));
    const determinedNumber = Math.floor(Math.random() * storeTerms.length);
    const determinedDefinition = storeTerms[determinedNumber].definition;
    const determinedTerm = storeTerms[determinedNumber].term;
    getDefinition.innerHTML = determinedTerm;

    // Gives all cards a definiton
    let arrayDefinition = [];
    let arrayNumbers = [];
    
    for (let i = 0; i < storeTerms.length; i++) {
        arrayDefinition.push(storeTerms[i].definition);
    }
    for (let j = 0; j < 20; j++) {
        let insideRandom = Math.floor(Math.random() * storeTerms.length);
        
        if (arrayNumbers.indexOf(insideRandom) == -1) {
            if (term1.innerHTML == 'term1') {
                term1.innerHTML = arrayDefinition[insideRandom];
                indexOfNumber = arrayDefinition.indexOf(arrayDefinition[insideRandom]);
                arrayNumbers.push(insideRandom);
            }
            else if (term2.innerHTML == 'term2') {
                term2.innerHTML = arrayDefinition[insideRandom];
                indexOfNumber = arrayDefinition.indexOf(arrayDefinition[insideRandom]);
                arrayNumbers.push(insideRandom);
            }
            else if (term3.innerHTML == 'term3') {
                term3.innerHTML = arrayDefinition[insideRandom];
                indexOfNumber = arrayDefinition.indexOf(arrayDefinition[insideRandom]);
                arrayNumbers.push(insideRandom);
            }
            else if (term4.innerHTML == 'term4') {
                term4.innerHTML = arrayDefinition[insideRandom];
                indexOfNumber = arrayDefinition.indexOf(arrayDefinition[insideRandom]);
                arrayNumbers.push(insideRandom);
            }

    }
    
    }

    // Checks if the actual term is in the cards
    let randomBottomSwitch = false;
    for (let t = 0; t < storeTerms.length * 5; t++) {
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

     function randomBottom() {
        let randomNumber = Math.floor(Math.random() * storeTerms.length);
                
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

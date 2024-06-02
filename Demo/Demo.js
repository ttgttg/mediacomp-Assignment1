let deck = [];
const fruits = ['Strawberry', 'Banana', 'Lime', 'Plum'];
const values = ['1', '2', '3', '4', '5'];
let win = 0; //whether the user has won a round.
let gameover = 0;
let gameRunning = 0;


//making a card deck
for (let fruit of fruits) {
    for (let value of values) {
        let card = {
                fruit : fruit,
                value : value
            }
        deck.push(card)//push to deck array
    }
}


let clicked = false; //audio cues
const bellSound = new Audio('./media/bell.wav');
const startSound = new Audio('./media/game start.wav');
const winSound = new Audio('./media/win.wav');
const loseSound = new Audio('./media/lose.wav');

const userBell = document.getElementById('underBell'); //bell image
const startButton = document.getElementById('startButton');


//play bell sound if user clicks bell
userBell.addEventListener('click', function() {
    clicked = true;
    console.log('Clicked!');
    bellSound.play();
});



//return to face-down cards
function flipCardBack() {
    const comCard = document.getElementById('comCard');
    const userCard = document.getElementById('userCard');

    comCard.src = './card images/back.png';
    userCard.src = './card images/back.png';
}


//face-up cards
function flipCardFront(comIndex, userIndex) {
    const comCard = document.getElementById('comCard');
    const userCard = document.getElementById('userCard');

    comCard.src = './card images/' + comIndex +'.png';
    userCard.src = './card images/' + userIndex + '.png';

}


//determines if user loses to computer if there's five of a fruit
function ringBell() {
    // respond after 3 seconds
    setTimeout(function() {
        if (!clicked) {
            loseSound.play()
            alert("We have 5 fruits!\nYou lose!");
        } else {
            winSound.play()
            alert("We have 5 fruits!\nYou win!");
            win=1;
        }
        gameover = 1;
    }, 2000);
    clicked = false;
}


//check if user has incorrectly pressed the bell
function checkUser() {
    setTimeout(function() {
        if (clicked) {
            loseSound.play()
            alert("We don't have 5 fruits!\nYou lose!");
            gameover = 1;
        }
    }, 2000);
    clicked = false;
}



//
function Round() {
    comIndex = Math.floor(Math.random() * (20)) //random card number
    userIndex = Math.floor(Math.random() * (20))
    com = deck[comIndex]
    user =  deck[userIndex]


    //if they have identical cards with value of 5, re-generate a random card
    while(com.value == 5 && user.value == 5 && com.fruit == user.fruit){
        comIndex = Math.floor(Math.random() * (20))
        userIndex = Math.floor(Math.random() * (20))
        com = deck[comIndex]
        user =  deck[userIndex]
    }
    
    // flip cards on page
    flipCardFront(comIndex, userIndex) //show card
    
    // calculate if there are 5 fruits
    let count = {
        Strawberry:0,
        Banana:0,
        Lime:0,
        Plum:0
    }

    count[com.fruit] += parseInt(com.value)
    count[user.fruit] += parseInt(user.value)
    console.log(count)


    //aply ringBell func if fruit count == 5
    let five=false
    for(let fruit in count){
        if(count[fruit] == 5){
            ringBell()
            five=true
            break
        } 
    }
    
    //aply checkUser if fruit count != 5
    if(!five){
        checkUser()
    }

}


//check if user is in a game
function doGame() {
    if(gameRunning == 0){
        gameRunning = 1
        setTimeout(function() {
            if (gameover == 0) {
                startSound.play()
                Round();
                gameRunning=0
                doGame(); 
            } else {
                reportResult(); //record result
                flipCardBack(); //flip card to face down
                gameover = 0;
                win=0;
                gameRunning=0;
            }        
        }, 2000);
    }
}


//change scoreboard
function reportResult(){
    let userScore = document.querySelector("#userScore")
    let comScore = document.querySelector("#comScore")

    userScore.textContent = parseInt(userScore.textContent) + win //user wins
    comScore.textContent = parseInt(comScore.textContent) + (1-win) //computer wins
}


//restart game when restart button is pressed
function restart() {
    document.getElementById('restartButton').addEventListener('click', function() {
        location.reload()
    })
}
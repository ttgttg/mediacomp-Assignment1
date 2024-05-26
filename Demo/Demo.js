let deck = [];
const fruits = ['Strawberry', 'Banana', 'Lime', 'Plum'];
const values = ['1', '2', '3', '4', '5'];
let win = 0;
let gameover = 0;
let gameRunning = 0;

for (let fruit of fruits) {
    for (let value of values) {
        let card = {
                fruit : fruit,
                value : value
            }
        deck.push(card)
    }
}


let clicked = false;
const bellSound = new Audio('./media/bell.wav');
const startSound = new Audio('./media/game start.wav');
const winSound = new Audio('./media/win.wav');
const loseSound = new Audio('./media/lose.wav');

const userBell = document.getElementById('underBell');
const startButton = document.getElementById('startButton');


userBell.addEventListener('click', function() {
    clicked = true;
    console.log('Clicked!');
    bellSound.play();
});



function flipCardBack() {
    const comCard = document.getElementById('comCard');
    const userCard = document.getElementById('userCard');

    comCard.src = './card images/back.png';
    userCard.src = './card images/back.png';
}

function flipCardFront(comIndex, userIndex) {
    const comCard = document.getElementById('comCard');
    const userCard = document.getElementById('userCard');

    comCard.src = './card images/' + comIndex +'.png';
    userCard.src = './card images/' + userIndex + '.png';

}


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




function Round() {
    comIndex = Math.floor(Math.random() * (20))
    userIndex = Math.floor(Math.random() * (20))
    com = deck[comIndex]
    user =  deck[userIndex]
    while(com.value == 5 && user.value == 5 && com.fruit == user.fruit){
        comIndex = Math.floor(Math.random() * (20))
        userIndex = Math.floor(Math.random() * (20))
        com = deck[comIndex]
        user =  deck[userIndex]
    }
    
    // flip cards on page
    flipCardFront(comIndex, userIndex)
    
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

    let five=false
    for(let fruit in count){
        if(count[fruit] == 5){
            ringBell()
            five=true
            break
        } 
    }

    if(!five){
        checkUser()
    }
}

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
                reportResult();
                flipCardBack();
                gameover = 0;
                win=0;
                gameRunning=0;
            }        
        }, 2000);
    }
}


function reportResult(){
    let userScore = document.querySelector("#userScore")
    let comScore = document.querySelector("#comScore")

    userScore.textContent = parseInt(userScore.textContent) + win
    comScore.textContent = parseInt(comScore.textContent) + (1-win)
}


function restart() {
    document.getElementById('restartButton').addEventListener('click', function() {
        location.reload()
    })
}
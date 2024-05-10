let deck = [];
const fruits = ['Strawberry', 'Banana', 'Lime', 'Plum'];
const values = ['1', '2', '3', '4', '5'];
let win = 0;
let gameover = 0;

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
const sound = new Audio('./media/bell.wav');
const userBell = document.getElementById('underBell');

userBell.addEventListener('click', function() {
    clicked = true;
    console.log('Clicked!');
    sound.play();
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
        let text = "There were total 5 fruits in this round!\n";
        if (!clicked) {
            text += "You lose :( Your opponent got a 1 point";
        } else {
            text += "You win :) You got a 1 point";
            win=1;
        }
        alert(text);
        gameover = 1;
    }, 2000);
    clicked = false;
}


function checkUser() {
    setTimeout(function() {
        let text = "There weren't total 5 fruits in this round...!\n";
        if (clicked) {
            text += "You shouldn't have pressed the bell.";
            gameover = 1;
        }
        alert(text);
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
    setTimeout(function() {
        if (gameover == 0) {
            Round();
            doGame(); 
        } else {
            reportResult();
            flipCardBack();
            gameover = 0;
            win=0;
        }        
    }, 2000);
}


function reportResult(){
    let userScore = document.querySelector("#userScore")
    let comScore = document.querySelector("#comScore")

    userScore.textContent = parseInt(userScore.textContent) + win
    comScore.textContent = parseInt(comScore.textContent) + (1-win)
}
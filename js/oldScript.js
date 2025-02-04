function rollOneDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function firstThrow(dice) {
    for (let i = 0; i < 5; i++) {
        dice[i] = rollOneDice();
    }
    return dice;
}

function showHand(dice,player) {
    for (let i = 0; i < 5; i++) {
        if (dice[i] == 1) {
            document.querySelector(`#p${player}_d${i+1}`).innerHTML = '<img src="../img/face1.webp" alt="Face 1">';
        }
        else if (dice[i] == 2) {
            document.querySelector(`#p${player}_d${i+1}`).innerHTML = '<img src="../img/face2.webp" alt="Face 2">';
        }
        else if (dice[i] == 3) {
            document.querySelector(`#p${player}_d${i+1}`).innerHTML = '<img src="../img/face3.webp" alt="Face 3">';
        }
        else if (dice[i] == 4) {
            document.querySelector(`#p${player}_d${i+1}`).innerHTML = '<img src="../img/face4.webp" alt="Face 4">';
        }
        else if (dice[i] == 5) {
            document.querySelector(`#p${player}_d${i+1}`).innerHTML = '<img src="../img/face5.webp" alt="Face 5">';
        }
        else if (dice[i] == 6) {
            document.querySelector(`#p${player}_d${i+1}`).innerHTML = '<img src="../img/face6.webp" alt="Face 6">';
        }
    }
}

function battle() {
        dice1 = firstThrow(dice1);
        showHand(dice1,1);
        let score1 = dice1[0]+dice1[1]+dice1[2]+dice1[3]+dice1[4];
        dice2 = firstThrow(dice2);
        showHand(dice2,2);
        let score2 = dice2[0]+dice2[1]+dice2[2]+dice2[3]+dice2[4];
        if (score1 > score2) {
            document.querySelector("h2").innerHTML = "Player One win with "+score1+" against "+score2;
        }
        if (score1 < score2) {
            document.querySelector("h2").innerHTML= "Player Two win with "+score2+" against "+score1;
        }
}

function definePlayers () {
    namePlayerOne = prompt("Nom du Joueur 1 ?");
    namePlayerTwo = prompt("Nom du Joueur 2 ?");
    document.querySelector("#p1").innerHTML = namePlayerOne;
    document.querySelector("#p2").innerHTML = namePlayerTwo;
}

let button = document.querySelector("input");
let dice1 = [];
let dice2 = [];

document.querySelector("h2").innerHTML= "Bienvenue dans ce petit jeu. Lancez les dés !";
//button.addEventListener("click", definePlayers);
definePlayers();
button.addEventListener("click", battle);





/*
function fisrtThrow() {

}
function secondThrow() {

}
function secondThrow() {

}
function selectDiceToThrow() {

}
function initHand() {

}



//structure script

fisrtThrow();
showHand();
if (need a second throw) {
    selectDiceToThrow();
    secondThrow();
    showHand();
}
if (need a third throw) {
    selectDiceToThrow();
    thirdThrow();
    showHand();
}*/
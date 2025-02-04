const game = {
    //délaration des propriétés (variables)

    players: {
        playerOne: {
            number: 1,
            name: "Joueur1",
            hand: [5],
            score: 0,
        },
        playerTwo: {
            number: 2,
            name: "Joueur2",
            hand: [5],
            score: 0,
        },
    },

    //déclaration des méthodes (fonctions)

    definePlayers: () => {
        game.players.playerOne.name = prompt("Nom du Joueur 1 ?");
        game.players.playerTwo.name = prompt("Nom du Joueur 2 ?");
        document.querySelector("#p1").innerHTML = game.players.playerOne.name;
        document.querySelector("#p2").innerHTML = game.players.playerTwo.name;
    },

    resetGame: () => {
        game.players.playerOne.score = 0;
        game.players.playerTwo.score = 0;
    },

    rollOneDice: () => {
        return Math.floor(Math.random() * 6) + 1;
    },

    firstThrow: (playerName) => {
        for (let i = 0; i < 5; i++) {
            game.players[playerName].hand[i] = game.rollOneDice();
        }
        return game.players[playerName].hand;
    },

    showHand: (playerName) => {
        for (let i = 0; i < 5; i++) {
            document.querySelector(`#p${game.players[playerName].number}_d${i + 1}`).innerHTML = `<img src="../img/face${game.players[playerName].hand[i]}.webp" alt="Face ${game.players[playerName].hand[i]}">`;
        }
    },

    calculateScore: (playerName) => {
        for (let i = 0; i < game.players[playerName].hand.length; i++) {
            game.players[playerName].score += game.players[playerName].hand[i];
        }
    },

    whoWin: (firstScore, secondScore) => {
        if (firstScore > secondScore) {
            document.querySelector("h2").innerHTML = `${game.players.playerOne.name} gagne avec ${firstScore} contre ${secondScore} !`;
        }
        else if (firstScore < secondScore) {
            document.querySelector("h2").innerHTML = `${game.players.playerTwo.name} gagne avec ${secondScore} contre ${firstScore} !`;
        }
        else {
            document.querySelector("h2").innerHTML = "Egalité !";
        }
    },

    battle: () => {
        game.resetGame();
        game.firstThrow("playerOne");
        game.showHand("playerOne");
        game.calculateScore("playerOne");
        game.firstThrow("playerTwo");
        game.showHand("playerTwo");
        game.calculateScore("playerTwo");
        game.whoWin(game.players.playerOne.score, game.players.playerTwo.score);
    },



}

//ligne d'execution de la commande

let button = document.querySelector("input");

document.querySelector("h2").innerHTML = "Bienvenue dans ce petit jeu. Lancez les dés !";
game.definePlayers();
button.addEventListener("click", game.battle);
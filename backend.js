function getComputerChoice(){
    // returns rock, paper or scissors randomly when called 
    let options = ["rock", "paper", "scissors"] ;
    return options[Math.floor( Math.random() * options.length )]       
}

function playRound (playerSelection, computerSelection) {
    // allows a round of the game to be played
    // make player input case insensitive
    let player = playerSelection.toLowerCase();

    if (player === computerSelection){
        return "It's a draw";
    }else if ((player === "rock") && (computerSelection === "scissors")) {
        return "You win! rock beats scissors";
    }else if ((player === "scissors") && (computerSelection === "paper")) {
        return "You win! scissors beats paper";
    }else if ((player === "paper") && (computerSelection === "rock")) {
        return "You win! paper beats scissors";
    } else {
        return "You lose! " + computerSelection + " beats " + player;
    }
}
function game (){

    // function allows 5 games to be played and declares an overall winnner

    let w = 0;
    let l = 0;

    for (let i = 0; i <5; i++){
        let result = playRound(prompt("Your move....."), getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            w++;
        }else if (result.includes("lose")){
            l++;
        }
    }

    if (w > l){
        console.log("You won the game!");
    }else if (w < l){
        console.log("You lost the game");
    }else {
        console.log("No one wins");
    }


}

game();

const body = document.body;
const content = document.querySelector('.content');
const buttons = document.querySelectorAll("button");
// score boards for game
const win = document.getElementById("win");
const loss = document.getElementById("loss");
// score counts
let w = 0;
let l = 0;

function getComputerChoice(){
    // returns rock, paper or scissors randomly when called 
    let options = ["rock", "paper", "scissors"] ;
    return options[Math.floor( Math.random() * options.length )]       
}

function playRound (player, computerSelection) {
    // store result 
    var result = "";
    
    if (player === computerSelection){
        result =  "It's a draw";
    }else if ((player === "rock") && (computerSelection === "scissors")) {
        result =  "You win! rock beats scissors";
    }else if ((player === "scissors") && (computerSelection === "paper")) {
        result =  "You win! scissors beats paper";
    }else if ((player === "paper") && (computerSelection === "rock")) {
        result = "You win! paper beats scissors";
    } else {
        result ="You lose! " + computerSelection + " beats " + player;
    }
    // display the result
    content.textContent = result;
    // update score and display
    if (result.includes("win")) {
        w++;
    }else if (result.includes("lose")){
        l++;
    }
    win.textContent = w;
    loss.textContent = l;
    // once player or computer reaches 5 deactivates buttons
    if(w==5 || l==5){
        if(w==5){
        content.textContent="You win .... refresh to play again";
        buttons.forEach(button => {
            button.disabled = true

        });
        }else{
            content.textContent="You lose .... refresh to play again";
            buttons.forEach(button => {
                button.disabled = true

            });
        }
    }
}

// if button is pressed play a round of the game
buttons.forEach((button) => {
    button.addEventListener("click", function(){
        playRound(String(button.id),getComputerChoice())});
        
});
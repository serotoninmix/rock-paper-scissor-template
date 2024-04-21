// Write your JavaScript code here

let playerChoice = "";
let computerChoice = "";
let playerChoiceContainer = document.querySelector("#player-choice-container").addEventListener("click", handlePlayerChoice);
// let emoji = document.querySelector("emoji");

function handlePlayerChoice(event){
if(!event.target.classList.contains("emoji")) return; 
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = '<p class="emoji">$(playerChoice)</p>';
}

const emojis = ["🪨", "📄", "✂️"];
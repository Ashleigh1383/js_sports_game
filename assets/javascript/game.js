
let teamone_numshots = document.querySelector("#teamone-numshots");
let teamone_shoot_button = document.querySelector("#teamone-shoot-button");
let teamone_numgoals = document.querySelector("#teamone-numgoals");
let mySound = document.querySelector("#sound");

teamone_shoot_button.addEventListener("click", function()  {
    mySound.play();

    console.log ("+ button clicked")

    
    let shots_taken1 = parseInt(teamone_numshots.innerHTML) +1;

    teamone_numshots.innerHTML = shots_taken1;

     

   
    let randnum = Math.random();
    console.log(randnum)
    if(randnum > .5) {
     let newGoals = parseInt(teamone_numgoals.innerHTML) + 1;
        teamone_numgoals.innerHTML = newGoals
     
   }
    
})



let teamtwo_numshots = document.querySelector("#teamtwo-numshots");
let teamtwo_shoot_button = document.querySelector("#teamtwo-shoot-button");
let teamtwo_numgoals = document.querySelector("#teamtwo-numgoals");

teamtwo_shoot_button.addEventListener("click", function()  {
    mySound.play();

    console.log ("+ button clicked")

    
    let shots_taken2 = parseInt(teamtwo_numshots.innerHTML) +1;

    teamtwo_numshots.innerHTML = shots_taken2;

    let randnum = Math.random();
    console.log(randnum)
    if(randnum > .5) {
     let newGoals = parseInt(teamtwo_numgoals.innerHTML) + 1;
        teamtwo_numgoals.innerHTML = newGoals
     
   }

})

let reset_button = document.querySelector("#reset-button");
let num_resets = document.querySelector("#num-resets");
let gameWinner = document.querySelector(".winner-box");

reset_button.addEventListener("click", function()  {
    mySound.play();


    console.log ("+ button clicked")

    
    let reset_count = parseInt(num_resets.innerHTML) +1;


    console.log(teamone_numgoals.innerText > teamtwo_numgoals.innerText)
    if(teamone_numgoals.innerText > teamtwo_numgoals.innerText) {
        gameWinner.innerText = "Team 1 WINS!"
    }
    else {
        gameWinner.innerText ="Team 2 WINS!"
    }

    num_resets.innerHTML = reset_count;
    teamone_numshots.innerHTML = 0;
    teamtwo_numshots.innerHTML = 0;
    teamone_numgoals.innerHTML = 0;
    teamtwo_numgoals.innerHTML = 0;



})



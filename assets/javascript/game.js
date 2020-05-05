
let teamone_numshots = document.querySelector("#teamone-numshots");
let teamone_shoot_button = document.querySelector("#teamone-shoot-button");
let teamone_numgoals = document.querySelector("#teamone-numgoals");

teamone_shoot_button.addEventListener("click", function()  {

    console.log ("+ button clicked")

    
    let shots_taken1 = parseInt(teamone_numshots.innerHTML) +1;

    teamone_numshots.innerHTML = shots_taken1;

        
    let teamone_goals = teamone_numgoals

    console.log(shots_taken1 = Math.random())
    shots_taken1 = Math.random();
    if(shots_taken1 > .5) {
     teamone_goals = parseInt(teamone_numgoals.innerHTML) + 1;
   }
     teamone_numgoals.innerHTML = teamone_goals;
    
})



let teamtwo_numshots = document.querySelector("#teamtwo-numshots");
let teamtwo_shoot_button = document.querySelector("#teamtwo-shoot-button");

teamtwo_shoot_button.addEventListener("click", function()  {

    console.log ("+ button clicked")

    
    let shots_taken2 = parseInt(teamtwo_numshots.innerHTML) +1;

    teamtwo_numshots.innerHTML = shots_taken2;


})

let reset_button = document.querySelector("#reset-button");
let num_resets = document.querySelector("#num-resets");

reset_button.addEventListener("click", function()  {

    console.log ("+ button clicked")

    
    let reset_count = parseInt(num_resets.innerHTML) +1;

    num_resets.innerHTML = reset_count;
    teamone_numshots.innerHTML = 0;
    teamtwo_numshots.innerHTML = 0;
})



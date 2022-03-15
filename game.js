//this is game.js

// ----------- CREATE CHARACTERS

const character = document.querySelector('#character');
character.src= "https://im2.ezgif.com/tmp/ezgif-2-ab210f8700.gif";

const block = document.querySelector("#block")
block.src="https://im2.ezgif.com/tmp/ezgif-2-143abd5a86.png"

// ------------- CREATE ACTION FUNCTIONS

function jump () {
    character.classList.toggle("animate");
}

character.addEventListener( "click", () => jump() )
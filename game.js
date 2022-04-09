
// ----------- CREATE CHARACTERS

const game = document.querySelector("#game")

const ghost = document.querySelector("#ghost");
ghost.src= "./assets/ghost.png";

const grave = document.querySelector("#grave");
grave.src= "./assets/tombstone.png";

// ------------- CREATE ACTION FUNCTIONS

function jump () {
    if( ghost.classList != "jump" ) {
        ghost.classList.add("jump")
    setTimeout( () => {
        ghost.classList.remove("jump");
        }, 350 )
    }
}

document.addEventListener( "keydown", evt => {
    if( evt.key === " " || evt.code === "Space") {
        jump()
    }
});

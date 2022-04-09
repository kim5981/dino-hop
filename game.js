
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

const alive = setInterval( () => {
    //get position of ghost as it moves along "top"  (y-axis)
    const ghostTop = parseInt(
        window.getComputedStyle(ghost)
        .getPropertyValue("top")
        );

    // get position of grave as it moves "left" (x-axis)
    const graveLeft = parseInt(
        window.getComputedStyle(grave)
        .getPropertyValue("left")
    )

    // console.log("grave: ", graveLeft); //-200ish
    // console.log("ghost: ", ghostTop); // 260

    //detect collision
    if ( graveLeft< 35  && graveLeft > 20 && ghostTop>= 300  ) {
       //collision
       alert("game over!")
    }

}, 10);
let buttonStart = document.getElementById("button-start")

function startGame() {
    gameLoop();
}

buttonStart.addEventListener("click", startGame)

let loops = 0;
let peopleVisible = false

function gameLoop() {
    peopleVisible = !peopleVisible;
    creatCharacters();
    flashCharacters();
    loops++;
    if (loops < 12) {
        setTimeout(gameLoop, 3000);
    }
    else {
        alert("game over!");
    }
}

function creatCharacters() {
    let board = document.getElementById("board")
    if (peopleVisible) {
        classToSet = "character visible";
    }
    else {
        classToSet = "character hidden ";
    }
    for (let index = 0; index < 6; index++) {
        board.children[index].className = classToSet;
        board.children[index].innerHTML = "гость";
        
    }
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    board.children[randomNumber - 1].innerHTML = "вор"
}



function flashCharacters() {
    let board = document.getElementById("board");
    
    for (let index = 0; index < 6; index++) {
        

    }
}
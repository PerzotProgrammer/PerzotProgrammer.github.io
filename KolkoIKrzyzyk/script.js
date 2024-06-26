let turn = "O";
let isOver = false;
let moves = 0;

function Click() {
    if (turn === "O") {
        window.onclick = clickedElement => {
            let check = document.getElementById(clickedElement.target.id);
            if (isOver || check === null || check.innerHTML !== "") return;
            document.getElementById(clickedElement.target.id).innerHTML = turn;
            document.getElementById(clickedElement.target.id).classList.add("O");
            turn = "X";
            document.getElementById("info").innerHTML = "Ruch " + turn;
            WinCheck();
            if (!isOver) DrawCheck();
        }
    }
    if (turn === "X") {
        window.onclick = clickedElement => {
            let check = document.getElementById(clickedElement.target.id);
            if (isOver || check === null || check.innerHTML !== "") return;
            document.getElementById(clickedElement.target.id).innerHTML = turn;
            document.getElementById(clickedElement.target.id).classList.add("X");
            turn = "O";
            document.getElementById("info").innerHTML = "Ruch " + turn;
            WinCheck();
            if (!isOver) DrawCheck();
        }
    }
}

function WinCheck() {
    const tiles = document.getElementsByClassName("tile");
    const WinCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    WinCombos.forEach(arr => {
        const circleWins = arr.every(tile => tiles[tile].classList.contains("O"))
        if (circleWins) {
            document.getElementById("info").innerHTML = "<span id='win'>O WYGRAŁO!</span>";
            isOver = true;
            const tiles = document.getElementsByClassName("tile");
            for (let i = 0; i < tiles.length; i++) tiles[i].classList.add("block");
        }
    })
    WinCombos.forEach(arr => {
        const crossWins = arr.every(tile => tiles[tile].classList.contains("X"))
        if (crossWins) {
            document.getElementById("info").innerHTML = "<span id='win'>X WYGRAŁ!</span>";
            isOver = true;
            for (let i = 0; i < tiles.length; i++) tiles[i].classList.add("block");
        }
    })
}

function DrawCheck() {
    moves++;
    if (moves === 9) {
        document.getElementById("info").innerHTML = "<span id='draw'>REMIS!</span>";
        isOver = true;
    }
}
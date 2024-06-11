let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")

let turn0 = true; // player1, player2

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.remove("hide");

}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was click")
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;

        }
        box.disabled = true;  // dubara repeat na ho isliye disabled ka use kiya
        checkWinner ();
    });
});

const disableBoxes = () => {  // win game ke baad baad game disabled ho jaye
    for(let box of boxes ){
        box.disabled = true;
    };
};

const enableBoxes = () => {  // win game ke baad baad game disabled ho jaye
    for(let box of boxes ){
        box.disabled = false;
        box.innerText = "";
    };
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = () => {
    for(let pattern of winPatterns) {
          let pos1Val =  boxes [pattern[0]].innerText;   // position 1,2,3 ke ander X hai ya O hai pata kr skte hai isse
          let pos2Val = boxes [pattern[1]].innerText;
          let pos3Val = boxes [pattern[2]].innerText;

          if(pos1Val != "" && pos2Val != "" && pos3Val != ""){  // koi bhi box khali nhi hona chahiye
            if(pos1Val === pos2Val && pos2Val === pos3Val) {   // one 2 ke equal hai or 2 three ke equal hai tb wineer hoga koi ek
                console.log("winner",pos1Val); 
                showWinner(pos1Val); // game end me hm dikha skte hai showWinner .
            }
          }
    }
};
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
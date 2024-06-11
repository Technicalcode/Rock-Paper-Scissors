function genComp(){
  let arr = ['Rock', 'Paper', 'Scissor']
  let num = Math.round(Math.random()*2)
  return arr[num]
}

const ScoreBoard = document.querySelector('.score-board')
let msg = document.querySelector ("#msg");


let computerScore = 0
let userScore = 0

function restart(){
    msg.style.display = 'block'

    msg.innerText = "started..."
    ScoreBoard.innerHTML = ' <div class="score"> <p id="user-score">0</p><p>You</p></div><div class="score"><p id="comp-score">0</p><p>Comp</p></div>'
}



function result (userMove){
    let compContainer = document.querySelector('#comp-score');
let userContainer = document.querySelector('#user-score');
    let computerMove = genComp();
    console.log(`computer = ${computerMove},user = ${userMove}`);

    

    
    
    


    if(computerMove === 'Rock' && userMove === 'Scissor' || computerMove === 'Paper' && userMove === 'Rock' || computerMove === 'Scissor' && userMove === 'Paper'){
        msg.innerText = `Congratulation 🎉🎉  $ Computer is win`
        computerScore++
        compContainer.innerText = computerScore;

        if(computerScore === 10 ){
            // msg.style.display = 'none'
            msg.innerText = "math ended! Bot won the match"
            computerScore = 0
            userScore = 0
            ScoreBoard.innerHTML = '<button onclick = "restart()" class="rsBtn">Restart</button>'
            
            return
         }
    }
    else if(computerMove === userMove){
        msg.innerText = `Match Tied Please Try again 😒`
    }
    else{
        msg.innerText = `User Win The Match 😎`
        userScore++;
        userContainer.innerText = userScore;
        if(userScore === 10 ){
            // msg.style.display = 'none'
            msg.innerText = "math ended! User won the match"
            computerScore = 0
            userScore = 0
            // ScoreBoard.innerHTML = '<button onclick= "restart class="rsBtn"">Restart</button>'
            ScoreBoard.innerHTML = '<button onclick = "restart()" class="rsBtn">Restart</button>'

            return
         }
    }
}






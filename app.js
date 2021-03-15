/* 
    1 : when startgamebtn clicked, the button will show of and the header,main,foooter area will come up
    2 : when every option game click run the match function

    3 : get random choose for computer
    4 : get player choose 
    
    check the choises and score up
    5 : check if both choose are the same
    6 : check if playerchooise is paper
    7 : check if playerchooise is rock
    8 : check if playerchooise is Scissors
    9 : update the scores
    10 : change hand picture

*/   

/// neseccery start game element
const startgamebtn = document.querySelector('.start-game-btn');
const maingamearea = document.querySelector('.main-game-area');
const scoresareas = document.querySelectorAll('.game-header .score-area');
const gametools = document.querySelectorAll('.game-footer .game-option');

// 1
startgamebtn.addEventListener('click',()=>{
    startgamebtn.classList.add('fade-start-game-btn');
    maingamearea.style.display = 'flex';
    setTimeout(()=>{
        maingamearea.classList.add('show-game-area')
    },500);
    scoresareas.forEach((scorearea)=>{
        scorearea.classList.add('showscoresarea')
    });

    gametools.forEach(gametool=>{
        gametool.classList.add('showgameoptions')
    })
})

/// neseccery check winner element & variable
let playerscore = 0;
let computerscore = 0;


// 2
const gameoptionbtn = document.querySelectorAll('.game-choose-option button');
const gamestatus = document.querySelector('.game-status');
let computeroptions = ['Rock','Paper','Scissors'];
gameoptionbtn.forEach(optionbtn=>{
    optionbtn.addEventListener('click',e=>{
        // 3
        let computerrandomindex = Math.floor(Math.random() * computeroptions.length);
        let computerchoose = computeroptions[computerrandomindex];
        // 4 
        let playerchoose = e.target.textContent;
        // 10-1
        changehandpicture(playerchoose , computerchoose);
        // 5
        if(playerchoose === computerchoose){
            gamestatus.innerHTML = 'its tie,try again';
            return
        }
        // 6 
        if(playerchoose === 'Paper'){
            if(computerchoose === 'Rock'){
                playerscore++;
            gamestatus.innerHTML = 'Player Win';
            updatescore()
                return
            }else{
                computerscore++;
                gamestatus.innerHTML = 'Computer Win';
                updatescore()
                    return
            }
        }
        // 7 
        if(playerchoose === 'Rock'){
            if(computerchoose === 'Scissors'){
                playerscore++;
            gamestatus.innerHTML = 'Player Win';
            updatescore()
                return
            }else{
                computerscore++;
                gamestatus.innerHTML = 'Computer Win';
                updatescore()
                    return
            }
        }
        // 8
        if(playerchoose === 'Scissors'){
            if(computerchoose === 'Paper'){
                playerscore++;
            gamestatus.innerHTML = 'Player Win';
            updatescore()
                return
            }else{
                computerscore++;
                gamestatus.innerHTML = 'Computer Win';
                updatescore()
                    return
            }
        }
        // 9
        function updatescore (){
            const playerscorearea = document.getElementById('player-score');
            const computerscorearea = document.getElementById('computer-score');
            playerscorearea.textContent = playerscore;
            computerscorearea.textContent = computerscore;
        }

        // 10-2
        function changehandpicture (playerchoose , computerchoose){
            const playerhand = document.getElementById('player-hand');
            playerhand.src = `imgs/${playerchoose}.png`;
            const computerhand = document.getElementById('computer-hand');
            computerhand.src = `imgs/${computerchoose}.png`;
        }
    })
})


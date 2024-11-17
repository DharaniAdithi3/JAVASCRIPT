  
    let score =JSON.parse(localStorage.getItem('score'))||
    {
      wins: 0,
    losses: 0,
    ties: 0
    };
    updates();
   /* document.querySelector('.status')
    .innerHTML=`${result}`;
    document.querySelector('.displayScore')
      .innerHTML=` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      /*if(score===null){
        score={
          wins: 0,
          losses: 0,
          ties: 0
        };
      }*/
     let play=false;
     let interval;
    
    function autoplay(){
     
        if(!play){
            interval= setInterval(()=>{
              const playerMove = pickComputerMove();
              playGame(playerMove);
             },1000);
             play=true;
             let s=document.querySelector('.auto1');
                s.innerText="Stop playing";
              
            }
            else{
               clearInterval(interval);
               play=false;
               let s=document.querySelector('.auto1');
               s.innerText="Autoplay";
            }
        
     };
      
     
    let store=document.querySelector('.take');
    store.addEventListener('click',()=>{
      playGame('rock');
    });
    let store1=document.querySelector('.take1');
    store1.addEventListener('click',()=>{
      playGame('paper');
    });
    let store2=document.querySelector('.take2');
    store2.addEventListener('click',()=>{
      playGame('Scissors');
    });
    document.body.addEventListener('keydown',(event)=>
    {
      if(event.key==='r')
      {
        playGame('rock');
      }
      else if(event.key==='p')
      {
        playGame('paper');
      }
      else if(event.key==='s')
        {
          playGame('scissors');
        }
        else if(event.key==='a')
        {
          autoplay();
        }
        else if(event.key==='Backspace')
        {
          confrimation();
        }
      });
      document.querySelector('.reset1').addEventListener('click',()=>{
         confrimation();
      });
      function confrimation(){
        document.querySelector('.confrim').innerHTML=`
        <button class="yes"> Yes</button>
        <button class="no">No</button>`;
        document.querySelector('.yes').addEventListener('click',()=>{
           resetScore();
           hide();
        });
        document.querySelector('.no').addEventListener('click',()=>{
             hide();
        });

      }
      function hide(){
        document.querySelector('.confrim').innerHTML="";
      }

      let z=document.querySelector('.reset1');
      function resetScore(){
        score.wins=0;
        score.losses=0;
        score.ties=0;
        localStorage.removeItem('score');
        updates();
      };
    
        
      function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose';
          } else if (computerMove === 'paper') {
            result = 'You win';
          } else if (computerMove === 'scissors') {
            result = 'You tie';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win';
          } else if (computerMove === 'paper') {
            result = 'You tie';
          } else if (computerMove === 'scissors') {
            result = 'You lose';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'You tie';
          } else if (computerMove === 'paper') {
            result = 'You lose';
          } else if (computerMove === 'scissors') {
            result = 'You win';
          }
        }
        if(result==='You win')
        {
          score.wins=score.wins+1;
        }
        else if(result==='You lose')
        {
          score.losses=score.losses+1;
        }
        else if(result==='You tie'){
          score.ties=score.ties+1;
        }
      
        
       localStorage.setItem('score', JSON.stringify(score));
       updates();
       document.querySelector('.status')
       .innerHTML=result;
       document.querySelector('.show').innerHTML=`You 
       <img class="photo1" src="${playerMove}-emoji.png">  <img  class="photo1" src=" ${computerMove}-emoji.png">
       Computer `;
      }
       function updates(){
      
       document.querySelector('.displayScore')
       .innerHTML=` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

      }
    
      

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }
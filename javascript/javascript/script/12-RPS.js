 

    let score=JSON.parse(localStorage.getItem('score'))
     || {
        win:0,
        losses:0,
        ties:0
    };
    
    
    //  updatescore(); 
     updatescore();
    //  document.querySelector(".js-result").innerHTML=`result: ${result}`;
    //  document.querySelector(".js-moves").innerHTML=`You Pick ${playerMove}. Computer picks ${computermove}`;
   
    let isAuto=false;
    let intervalId;

    function Autoplay(){
        
      if(!isAuto){
          document.querySelector('.auto-play-but').innerHTML='Stop Auto play';
          intervalId= setInterval(function(){
          const playerMove=pickComputerMove();
          playgame(playerMove);
         },1000);

         isAuto=true;
        }else{
          document.querySelector('.auto-play-but').innerHTML='Auto play';
         clearInterval(intervalId);
         isAuto=false;
        }
      
        }

        // event listreer
        document.querySelector('.js-rock-button')
        .addEventListener('click',()=>{
          playgame('rock');
        });
        document.querySelector('.js-paper-button')
        .addEventListener('click',()=>{
          playgame('paper');
        });
        document.querySelector('.js-scissors-button')
        .addEventListener('click',()=>{
          playgame('scissors');
        });

        // anywher on screen type 
         document.body.addEventListener('keydown',(event)=>{
          if(event.key=='r'){
            playgame('rock');
          }else if(event.key=='p'){
            playgame('paper');

          }else if(event.key=='s'){
            playgame('scissors');

          }
         });
   
   function playgame(playerMove){

         let computermove=pickComputerMove();
         console.log(computermove);

          let result='';

          if(playerMove==='scissors')
          {
            if(computermove==='rock'){
              result='you loss.';
            }else if(computermove==='paper'){
              result='you win.';
            }else if(computermove==='scissors'){
              result='tai.';
            }
          }else if(playerMove==='rock')
          {
            if(computermove==='rock'){
              result='tai.';
            }else if(computermove==='paper'){
              result='you loss.';
            }else if(computermove==='scissors'){
              result='you win.';
            }
          }else if(playerMove==='paper')
          {
            if(computermove==='rock'){
              result='you win.';
            }else if(computermove==='paper'){
              result='tai.';
            }else if(computermove==='scissors'){
              result='you loss.';
            }
          }
          
          if(result==='you win.'){
            score.win=score.win+1;
          }else if(result==='you loss.'){
            score.losses=score.losses+1;
          }else if(result==='tai.'){
            score.ties=score.ties+1;
          }
          
          localStorage.setItem('score', JSON.stringify(score));
          
          updatescore();
          document.querySelector(".js-result").innerHTML=`Result : ${result}`;
          document.querySelector(".js-moves").innerHTML=`You  <img src="img/${playerMove}-emoji.png" alt="" class="icon res-icon"> <img src="img/${computermove}-emoji.png" alt="" class="icon res-icon"> Computer `;
         
         

          
    }

        function updatescore(){
          document.querySelector('.js-score').innerHTML=`wins:${score.win}, losses:${score.losses}, Ties:${score.ties}`;

        }


        function pickComputerMove(){
          const randomNum=Math.random();
          let computermove='';
     
            console.log(randomNum);
            if(randomNum>=0 && randomNum<1/3){
              computermove='rock';
            }else if(randomNum>=1/3 && randomNum<2/3){
             computermove='paper';
            }else if(randomNum>=2/3 && randomNum<1){
             computermove='scissors';
            }
     
            return computermove; 
        }


       

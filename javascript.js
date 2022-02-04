var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;


//for start/reset
document.getElementById("startreset").onclick = function () {
//   if playing  
    if(playing == true){
        location.reload(); //reloading the page 
    }
    else{
        playing = true;
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        show("timeremaining");
//        document.getElementById("timeremaining").style.display = "block";
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        hide("gameOver"); 
        document.getElementById("startreset").innerHTML = "Reset Game";
        
        startcountdown(); 
        generateQA();
    }
 }
for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == correctAnswer){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            generateQA();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}


// FUNCTIONS 
function startcountdown(){
    action = setInterval(function(){
      timeremaining -= 1;
         document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if(timeremaining == 0){
            //game ends here
            stopcountdown();
//            clearInterval(action);
            show("gameOver");
//           document.getElementById("gameover").style.display="block";
              document.getElementById("gameOver").innerHTML = "<p>Game Over !</P><P> Your Score is " + score +".</p>";
//              document.getElementById("timeremainingvalue").style.display = "none;
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game"; 
        }
        
    },1000);
 0.
 }
function stopcountdown(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display = "none";   
}

//show an element

function show(Id){
    document.getElementById(Id).style.display = "block";   
}


// generate mcqs
function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer
    
    //fill other boxes with wrong answers
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
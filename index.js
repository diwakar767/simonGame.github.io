var randomNumber;
var randomChosenColor;
var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow" ];
var started=0 ;
var level=0;
  



function startover(){
    level=0;
    gamePattern.clear();
    started=0;
}

$(document).keypress(function(event){
    if(started==0){
        nextSequence();
        started++;
        $("h1").text("Level  "+level);
    }
});

$("body").click(function(){
    if(started==0){
        nextSequence();
        started++;
        $("h1").text("Level  "+level);
    }
});


function nextSequence(){
userClickedPattern=[];
randomNumber=Math.floor(Math.random()*4);
randomChosenColor=buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
level++;
$("h1").text("Level  "+level);
$("#"+randomChosenColor).fadeOut(100).fadeIn(100);
playaudio(randomChosenColor);
};




function checkAnswer(currentLevel) {


    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");


      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
        playaudio("wrong");
      console.log("wrong");
      $("body").addClass("game-over");
      setTimeout(function(){
          $("body").removeClass("game-over");
      },200);
      $("h1").text("Game Over, Press Any Key to Restart");
      startover();
    }

}




$(".btn").click(function(){
    var userChoosenColor;
    userChoosenColor=$(this).attr("id");
    userClickedPattern.push(userChoosenColor);
    playaudio(userChoosenColor);
    animatePress(userChoosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function playaudio(name){
    var audio= new Audio("sounds/"+name+".mp3");
    audio.play(); 
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    },100);
}






var form=document.getElementById("myForm");
var input1=document.getElementById("player1");
var input2=document.getElementById("player2");
var result=document.getElementById("result");


function play(){
    var input1Value=String(input1.value);
    var input2Value=String(input2.value);
    if(input1Value===input2Value){
        result.textContent="Tie";

    }
    if(input1Value==="rock" && input2Value==="paper"){
        result.textContent="Player2 Wins";
    }
    if(input1Value==="paper" && input2Value==="scissor"){
        result.textContent="Player2 Wins";
    }
    if(input1Value==="scissor" && input2Value==="rock"){
        result.textContent="Player2 Wins";
    }
    else{
        if(input1Value==="paper" && input2Value==="rock"){
            result.textContent="Player1 Wins";
        }
        if(input1Value==="scissor" && input2Value==="paper"){
            result.textContent="Player1 Wins";
        }
        if(input1Value==="rock" && input2Value==="scissor"){
            result.textContent="Player1 Wins";
        }
    }

}
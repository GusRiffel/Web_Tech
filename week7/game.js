let lastDisplayed = "O";
let countPlay = 0;
let winner = false;

function displayLetter(id){
  if(document.getElementById(id).innerHTML == ""){
    if(lastDisplayed == "O"){
      document.getElementById(id).innerHTML = "<span class=letterX>X</span>";
      lastDisplayed = "X";
      countPlay++;
    }
    else{
      document.getElementById(id).innerHTML = "<span class=letterO>O</span>";
      lastDisplayed = "O";
      countPlay++;
    }  
  }
  if(countPlay >= 5){
    checkWinner(lastDisplayed);
  }
  if(countPlay == 9 & winner == false){
    alert("Its a draw!");
    location.reload(); 
  }
}

function checkWinner(letter){
  let playerLetter = letter;
  let c1 = document.getElementById("c1").innerHTML;
  let c2 = document.getElementById("c2").innerHTML;
  let c3 = document.getElementById("c3").innerHTML;
  let c4 = document.getElementById("c4").innerHTML;
  let c5 = document.getElementById("c5").innerHTML;
  let c6 = document.getElementById("c6").innerHTML;
  let c7 = document.getElementById("c7").innerHTML;
  let c8 = document.getElementById("c8").innerHTML;
  let c9 = document.getElementById("c9").innerHTML;

  if(winConditionCheck(c1, c2, c3) || 
     winConditionCheck(c4, c5, c6) || 
     winConditionCheck(c7, c8, c9) ||
     winConditionCheck(c1, c4, c7) || 
     winConditionCheck(c2, c5, c8) || 
     winConditionCheck(c3, c6, c9) ||
     winConditionCheck(c1, c5, c9) || 
     winConditionCheck(c3, c5, c7)) 
     {
      winner = true;
     }
  
  setWinner(winner, playerLetter);   
}

function winConditionCheck(firstCell, secondCell, thirdCell){
  if(firstCell == secondCell && firstCell == thirdCell && firstCell){
    return true;
  }
  return false;
}

function setWinner(winner, letter){
  if(winner == true){
    alert(`Player ${letter} wins!`);
    location.reload();    
  }
}






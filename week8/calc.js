function calculateAverage(){
  let fd = parseInt(document.getElementById("score1").value);
  let oop = parseInt(document.getElementById("score2").value);
  let cs = parseInt(document.getElementById("score3").value);
  let nw = parseInt(document.getElementById("score4").value);
  let db = parseInt(document.getElementById("score5").value);

  let avg = (fd + oop + cs + nw + db) / 5;
  const asnwer = document.getElementById("result");
  const image = document.getElementById("img");
  

  if(avg >= 70 && avg <= 100){
    asnwer.style.color = "green";
    asnwer.style.fontWeight = "bold";
    image.src = "images/congrats.gif";
    asnwer.innerHTML=`Congrats! You have a first class. Your average is: ${avg}`
  }
  
  else if(avg >= 60 && avg <= 69){
    asnwer.style.color = "green";
    asnwer.style.fontWeight = "bold";
    image.src = "images/congrats.gif"
    asnwer.innerHTML=`Congrats! You have a 2nd class. Your average is: ${avg}`
  }

  else if(avg >= 50 && avg <= 59){
    asnwer.style.color = "green";
    asnwer.style.fontWeight = "bold";
    image.src = "images/congrats.gif"
    asnwer.innerHTML=`Congrats! You have a 2nd class. Your average is: ${avg}`
  }

  else if(avg >= 40 && avg <= 49){
    asnwer.style.color = "green";
    asnwer.style.fontWeight = "bold";
    image.src = "images/congrats.gif"
    asnwer.innerHTML=`Congrats! You have passed. Your average is: ${avg}`
  }

  else{
    asnwer.style.color = "red";
    asnwer.style.fontWeight = "bold";
    image.src = "images/fail.gif"
    asnwer.innerHTML=`We regret to inform you, you didn't pass. Your average is: ${avg}`
  }
}
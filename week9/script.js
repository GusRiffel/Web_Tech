function validAll(){
  if(validName() && validEmail() && validNo() && validChoice()){
    alert("Form submitted");
  }else{
    alert("Something went wrog, please try again");
  }
}

function validName(){
  if(!document.userSurvey.userName.value){
    window.alert("Please fill in Name field");
    document.userSurvey.userName.focus();
    return false;
  }else{
    return true;
  }  
}

function validEmail(){
  if(!document.userSurvey.eMail.value){
    window.alert("E-mail Address missing. Please enter a valid E-mail address to continue.");
    document.userSurvey.eMail.focus();
    return false;
  }else{
    var emailAddress = document.userSurvey.eMail.value;
    var atLoc = emailAddress.indexOf("@",1);
    var dotLoc = emailAddress.indexOf(".",atLoc+2);
    var len = emailAddress.length;
    
    if(atLoc > 0 && dotLoc > 0 && len > dotLoc+2){
      return true;
    }else{
      alert("Invalid E-mail address! Please enter your e-mail address again.");
      document.userSurvey.eMail.focus();
      return false;
    }
  }
}

function validNo(){
  if(!document.userSurvey.phone.value){
    window.alert("Phone number missing. Please enter a valid phone number to continue.");
    document.userSurvey.phone.focus();
    return false;
  }else{
    var numbersOnly = "";
    var chars = "";
    var phoneNo = document.userSurvey.phone.value;

    for (i = 0; i < phoneNo.length; i++){
      chars = phoneNo.substring(i,i+1);

      if (chars >= "0" && chars <= "9"){
        numbersOnly = numbersOnly + chars;
      }
    }

    if(numbersOnly.length != 13){
      window.alert("Incorrect phone number format.You must enter 13 numbers.");
      document.userSurvey.focus();
      return false;
    }else{
      var areacode = numbersOnly.substring(0,2);
      var leading0 = numbersOnly.substring(2,3);
      var exchange = numbersOnly.substring(3,5);
      var ext1 = numbersOnly.substring(5,9);
      var ext2 = numbersOnly.substring(9);
      var newNumber =( "+" + areacode + " " +"(" + leading0 + ")" + exchange + " " + ext1 + "-" + ext2);

      document.userSurvey.phone.value = newNumber;
      return true;
    }
  }
}

function validChoice(){
  var bookChoice = "";
  var x= "";

  for(i=0;i< 4;i++){
    if (document.userSurvey['bookChoice'+i].checked){
      bookChoice = document.userSurvey['bookChoice'+i].value;
      x = x +"\n"+ bookChoice; // "\n" output a newline
    }
  }
  if(bookChoice == ""){
    window.alert("You must select at least one book category.");
    //insert a statement missing here
  }else{
    var userName = document.userSurvey.userName.value;
    var eMail = document.userSurvey.eMail.value;
    var phoneNo = document.userSurvey.phone.value;
    //insert a statement here so that the values of username, email, phoneNo and the book selected will be display in the textarea;
    return true;
  }
}


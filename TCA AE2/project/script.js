let slideIndex = 1; // setting a value to start the index of our slide show
startSlide(); // calling function as soon as page loads

function startSlide(){ // functions to make the slide run automatically
  let i;
  let slides = document.getElementsByClassName("slide"); // getting the number of images by using getClassName which will return an Array with all the html elements using that class
  for(i = 0; i < slides.length; i++){ // for to that will be hiding our image when another one becomes active
    slides[i].style.display = "none";
  }
  slideIndex++; // increment the slideIndex so we can move to the next image
  if(slideIndex > slides.length){ // preventing error by avoiding the increment of superpassing the number of images we have
    slideIndex = 1;
  }
  slides[slideIndex-1].style.display = "block"; //finally displaying the image
  setTimeout(startSlide, 4000); //a timeout to define in how many seconds we want our image to keep changing
}

function showSlides(n){ // function to move the images manually, the n parameters comes from the HTML doc where the function is called
  var i;
  var slides = document.getElementsByClassName("slide"); //same as with the previous function
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length){
    slideIndex = 1
  }
  if (n < 1){ // preventing the error when clicking the arrow for the previous image which comes with the number -1 which would 0 de index
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++){ // setting display none to the images we dont want to see
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) { // reseting all dots with active text to empty again so we can set it in the end together with the image chosen
      dots[i].className = dots[i].className.replace(" active", ""); // replace function to replace active for ""
  }
  slides[slideIndex-1].style.display = "block"; // defining which image was clicked and will be displayed
  dots[slideIndex-1].className += " active"; // setting the dot corresponding to the image as active
}

function plusSlides(n) { // fuction called when used the arrows to navigate
  showSlides(slideIndex += n);
}

function currentSlide(n) { // funtion used to navigate through the dots
  showSlides(slideIndex = n);
}



// load header
$('#header').load('../Header/header.html');

// load footer
$('#footer').load('../Footer/footer.html');

var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slideshow")[0].getElementsByTagName("img");
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].classList.add("active");
  
  setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}





function vetscheckbox() {
  // Get the checkbox
  var checkBox = document.getElementById("Vets");
  
  // Get the output text
  var text1 = document.getElementById("v2");
  var text2 =document.getElementById("v3");
  var text5 = document.getElementById("v5");
  


  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text1.style.display = "none";
    text2.style.display = "none";
    text5.style.display = "none";
    
    

  } else {
    // text1.style.display ="block";
    text1.style.display="flex";
    text2.style.display = "flex";
    text5.style.display = "flex";
  

  }
}

function hosiptalcheckbox() {
  // Get the checkbox
  var checkBox2 = document.getElementById("Hospitals");
  
  // Get the output text
  var text3 = document.getElementById("v1");
  var text4 = document.getElementById("v4");

 



  // If the checkbox is checked, display the output text
  if (checkBox2.checked == true){
    text3.style.display = "none";
    text4.style.display = "none";
 
  
    

  } else {
    text3.style.display ="flex";
    text4.style.display = "flex";
  
  
    
  

  }

}


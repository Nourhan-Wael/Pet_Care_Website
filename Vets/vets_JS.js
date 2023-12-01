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
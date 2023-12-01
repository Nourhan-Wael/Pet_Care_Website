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



var photos = document.getElementsByClassName("photo");
var currentIndex = 0;

function showNextPhoto() {
  photos[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % photos.length;
  photos[currentIndex].classList.add("active");
}

setInterval(showNextPhoto, 1000); // Change photo every 2 seconds (adjust as needed)


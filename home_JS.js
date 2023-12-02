// load header
$('#header').load('./Header/header.html');

// load footer
$('#footer').load('./Footer/footer.html');

//first slideshow

var i=1;
setInterval(function(){
	var j=i++;
	document.getElementById("slide1").setAttribute("src","./images/Home page/img "+j+".svg")
	document.getElementById("slide2").setAttribute("src","./images/Home page/img "+i+".svg")
	i++;
	if(i>6){
		i=1;
	}
},2000);

//second slideshow

var k=1;
setInterval(function(){
	document.getElementById("bigslide").setAttribute("src","./images/Home page/slide image/slide "+k+".png");
	k++;
	if(k>3){
		k=1;
	}
},2000);

// animation shape
var photos = document.getElementsByClassName("photo");
var currentIndex = 0;

function showNextPhoto() {
  photos[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % photos.length;
  photos[currentIndex].classList.add("active");
}

setInterval(showNextPhoto, 1000); // Change photo every 2 seconds (adjust as needed)



var photos2 = document.getElementsByClassName("photo2");
var currentIndex2 = 0;

function showNextPhoto2() {
  photos2[currentIndex2].classList.remove("active");
  currentIndex2 = (currentIndex2 + 1) % photos2.length;
  photos2[currentIndex2].classList.add("active");
}

setInterval(showNextPhoto2, 1000); // Change photo every 2 seconds (adjust as needed)

var photos3 = document.getElementsByClassName("photo3");
var currentIndex3 = 0;

function showNextPhoto3() {
  photos3[currentIndex3].classList.remove("active");
  currentIndex3 = (currentIndex3 + 1) % photos3.length;
  photos3[currentIndex3].classList.add("active");
}

setInterval(showNextPhoto3, 1000); // Change photo every 2 seconds (adjust as needed)
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

var leg1=document.getElementById("photo1");
var bone1=document.getElementById("photo2");
var leg2=document.getElementById("photo3");
var bone2=document.getElementById("photo4");
var leg3=document.getElementById("photo5");
var bone3=document.getElementById("photo6");
var leg4=document.getElementById("photo7");
var bone4=document.getElementById("photo8");
var counter=0

function showNextPhoto() {
	if(counter ==0)
	{
		bone1.style.display="none";
		bone2.style.display="none";
		bone3.style.display="none";
		bone4.style.display="none";
		leg1.style.display="block";
		leg2.style.display="block";
		leg3.style.display="block";
		leg4.style.display="block";
		counter=1;
	}
	else{
		bone1.style.display="block";
		bone2.style.display="block";
		bone3.style.display="block";
		bone4.style.display="block";
		leg1.style.display="none";
		leg2.style.display="none";
		leg3.style.display="none";
		leg4.style.display="none";
		counter=0
	}
}
      
setInterval(showNextPhoto, 1000);

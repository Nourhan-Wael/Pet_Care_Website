// load header
$('#header').load('../Header/header.html');

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    var checkBox1 = document.getElementById("myCheck1");
    var checkBox2 = document.getElementById("myCheck2");
    var checkBox3 = document.getElementById("myCheck3");
    var checkBox4 = document.getElementById("myCheck4");
    var T2 = document.getElementById("T2");
    var container = document.querySelector(".container");
    // Get the output text
    var sub1 = document.querySelector(".sub1");
    var sub2 = document.querySelector(".sub2");
    var sub3 = document.querySelector(".sub3");
    var sub4 = document.querySelector(".sub4");
    var sub5 = document.querySelector(".sub5");
    var sub6 = document.querySelector(".sub6");
    var sub7 = document.querySelector(".sub7");
    var sub8 = document.querySelector(".sub8");
        
  
    // If the checkbox is checked, display the output text
    if(checkBox.checked == true){

        sub1.style.display = "block";
        sub2.style.display = "block";
        sub3.style.display = "block";
        sub4.style.display = "block";
        sub5.style.display = "block";
        sub6.style.display = "block";
        sub7.style.display = "block";
        sub8.style.display = "block";
        sub1.style.marginLeft='0%';
        sub2.style.marginLeft='0%';
        sub3.style.marginLeft='0%';
        sub4.style.marginLeft='0%';
        sub5.style.marginLeft='0%';
        sub6.style.marginLeft='0%';
        sub7.style.marginLeft='0%';
        sub8.style.marginLeft='0%';
        container.style.marginLeft ='20%';
        T2.style.marginLeft='10%'

    }
    else if (checkBox1.checked == true){
      sub1.style.display = "block";
      sub2.style.display = "block";
      sub1.style.marginLeft='-10%';
      sub2.style.marginLeft='30%';
      container.style.marginLeft ='40%';
      sub3.style.display = "none";
        sub4.style.display = "none";
        sub5.style.display = "none";
        sub6.style.display = "none";
        sub7.style.display = "none";
        sub8.style.display = "none";
        T2.style.marginLeft = '-50%';
    }
    // card 3 & 4
    else if (checkBox2.checked == true){
        sub3.style.display = "block";
        sub4.style.display = "block";
        sub3.style.marginLeft='-10%';
        sub4.style.marginLeft='30%';
        container.style.marginLeft ='40%';
        sub1.style.display = "none";
        sub2.style.display = "none";
        sub5.style.display = "none";
        sub6.style.display = "none";
        sub7.style.display = "none";
        sub8.style.display = "none";
        T2.style.marginLeft = '-50%';
    }
      // card 5 & 6
    else if (checkBox3.checked == true){
        sub5.style.display = "block";
        sub6.style.display = "block";
        sub5.style.marginLeft='-10%';
        sub6.style.marginLeft='30%';
        container.style.marginLeft ='40%';
        sub1.style.display = "none";
        sub2.style.display = "none";
        sub3.style.display = "none";
        sub4.style.display = "none";
        sub7.style.display = "none";
        sub8.style.display = "none";
        T2.style.marginLeft = '-50%';
      } 
      // card 7 & 8
    else if (checkBox4.checked == true){
        sub7.style.display = "block";
        sub8.style.display = "block";
        sub7.style.marginLeft='-10%';
        sub8.style.marginLeft='30%';
        container.style.marginLeft ='40%';
        sub1.style.display = "none";
        sub2.style.display = "none";
        sub3.style.display = "none";
        sub4.style.display = "none";
        sub5.style.display = "none";
        sub6.style.display = "none";
        T2.style.marginLeft = '-50%';
        
      }
     
  }
  
  var count=0;
  function Bought() {
   count = count+1; 
   document.getElementById('ShoppingBasket').innerHTML=count;
  }
  function Back() {
    if(count==0){
        alert("Sorry, you haven't bought anything yet!");
    }
    else{
        count = count-1; 
        document.getElementById('ShoppingBasket').innerHTML=count;   
    }
   }


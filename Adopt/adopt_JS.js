// load header
$('#header').load('../Header/header.html');

// load footer
$('#footer').load('./Footer/footer.html');


// function getSelectValue(){
//     var selectValue = document.getElementById("list1").value;

// }

theSelect = document.getElementById("list1")
theSelect2 = document.getElementById("list2")

imgm1 = document.getElementById("c1")
imgm2 = document.getElementById("c2")
imgm3 = document.getElementById("c3")
imgm4 = document.getElementById("c4")

imgm5 = document.getElementById("c5")
imgm6 = document.getElementById("c6")
imgm7 = document.getElementById("c7")
imgm8 = document.getElementById("c8")


function change1(){
    if(theSelect.value=='Male'){
        imgm1.style.display="block";
        imgm2.style.display="block";
        imgm3.style.display="block";
        imgm4.style.display="block";
        imgm5.style.display="none";
        imgm6.style.display="none";
        imgm7.style.display="none";
        imgm8.style.display="none";

    }
    else if(theSelect.value=='Female'){
            imgm5.style.display="block";
            imgm6.style.display="block";
            imgm7.style.display="block";
            imgm8.style.display="block";
            imgm1.style.display="none";
            imgm2.style.display="none";
            imgm3.style.display="none";
            imgm4.style.display="none";

    }
    else if(theSelect.value=='Male/Female'){
            imgm1.style.display="block";
            imgm2.style.display="block";
            imgm3.style.display="block";
            imgm4.style.display="block";
            imgm5.style.display="block";
            imgm6.style.display="block";
            imgm7.style.display="block";
            imgm8.style.display="block";
    }

    }




    function change2(){
        if(theSelect2.value=='Cat'){
            imgm1.style.display="block";
            imgm5.style.display="block";
            imgm2.style.display="block";
            imgm6.style.display="block";
            imgm3.style.display="none";
            imgm4.style.display="none";
            imgm7.style.display="none";
            imgm8.style.display="none";
    
        }
        else if(theSelect2.value=='Dog'){
                imgm3.style.display="block";
                imgm4.style.display="block";
                imgm7.style.display="block";
                imgm8.style.display="block";
                imgm1.style.display="none";
                imgm5.style.display="none";
                imgm2.style.display="none";
                imgm6.style.display="none";
    
        }
        else if (theSelect2.value=='Cat/Dog')
        {
                imgm1.style.display="block";
                imgm2.style.display="block";
                imgm3.style.display="block";
                imgm4.style.display="block";
                imgm5.style.display="block";
                imgm6.style.display="block";
                imgm7.style.display="block";
                imgm8.style.display="block";
    
        }
    }
    

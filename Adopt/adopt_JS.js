// load header
$('#header').load('../Header/header.html');

// load footer
$('#footer').load('./Footer/footer.html');


// function getSelectValue(){
//     var selectValue = document.getElementById("list1").value;

// }

theSelect = document.getElementById("list1")
 imgm = document.getElementById("c1")

// theSelect.addEventListener("change",function(event){
    
//     if(event.target.value=='Male'){
//         imgm.style.display="none"
//     }


// })

function change1(){
    if(theSelect.value=='Male'){
        imgm.style.display="none";
    }


}


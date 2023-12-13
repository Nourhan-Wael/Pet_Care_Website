// load header
$('#header').load('../Header/header.html');
// scroll with arrows
// var button = document.getElementById('slide');
// button.onclick = function () {
//     var container = document.getElementById('container');
//     sideScroll(container,'right',25,100,10);
// };

// var back = document.getElementById('slideBack');
// back.onclick = function (){
//     var container = document.getElementById('container');
//     sideScroll(container,'left',25,100,10);
// };

// function sideScroll(element,direction,speed,distance,step){
//     scrollAmount = 0;
//     var slideTimer = setInterval(function(){
//         if(direction == 'left'){
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if(scrollAmount >= distance){
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }


if(document.getElementById("flexhigh").checked){
    document.getElementById("high").style.display="block";
    document.getElementById("low").style.display="none";
}
else if (document.getElementById("flexlow").checked) {
    document.getElementById("high").style.display="none";
    document.getElementById("low").style.display="block";
} 
console.log(document.getElementById("flexhigh").checked);
// load header
$('#header').load('../Header/header.html');
// load footer
$('#footer').load('../Footer/footer.html');

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



var  usernameTrue = 0 ;
var  username2True = 0 ;

function form0() {


const form = document.getElementById('form');
const country = document.getElementById('username');
const location = document.getElementById('username2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidText = username => {
  const re = /^(([^[a-zA-Z]))$/;
  return re.test(String(username).toLowerCase());
}


const validateInputs = () => {


// Redirect to the home page
if(usernameTrue == 1 && username2True == 1){
	window.location.href = "../index.html";
	}

  
    const usernameValue = username.value.trim();
    const username2Value = username2.value.trim();
    


    
    if(usernameValue === '') {
      setError(username2, 'Email is required');
    } else if (!isValidText(usernameValue)) {
      setError(username, 'Provide a valid email address');
    } else {
      setSuccess(username);
    }
    
    
    if(username2Value === '') {
        setError(username2, 'Username is required');
    } else {
        setSuccess(username2);
    }
}
}
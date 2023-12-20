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






//validation
var  userTrue = 0 ;
var  emailTrue = 0 ;
var  passTrue = 0 ;


function signup() {


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pass');

form.addEventListener('submit', e => {
	e.preventDefault();
	validateInputs();
});


const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classlist.remove('success');
}

const setSuccess = element =>{
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = '';
inputControl.classList.add('success');
inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
  // Direct to next signup page
  if(userTrue ===1 && emailTrue === 1 && passTrue === 1){
    window.location.href = "../Sign up 2/signup2.html";
    }

  const usernameValue = username.value.trim();
  const emaliValue = email.value.trim();
  const passwordVlue = password.value.trim();

  if(usernameValue === ''){
    setError(username, 'Username is required');
  }else{
	  userTrue = 1 ;
	  setSuccess(username);
  }
  
  if(emaliValue === ''){
    setError(email, 'Email is required');
  }else if(!isValidEmail(emaliValue)){
    setError(email, 'Provide a valid email address');
  }else{
	  emailTrue = 1 ;
    	setSuccess(email);
  }
  
  if(passwordVlue === ''){
    setError(password, 'Password is requied');
  }else if(passwordVlue.length < 8){
    setError(password, 'Password must be at least 8 character');
  }else{
    
    passTrue = 1 ;
    setSuccess(password);
  }

};
}


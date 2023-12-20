// load header
$('#header').load('../Header/header.html');
// load footer
$('#footer').load('../Footer/footer.html');

// animation 
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


// form validation
var  emailTrue = 0 ;
var  passTrue = 0 ;

function login() {

// get form and input element
const form = document.getElementById('form') ;
const email = document.getElementById('email');
const password = document.getElementById('pass');


// Prevent the default form submission and call validateInputs function to check inputs 
form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});


//Helper function to set error message and styling
const setError = (element, message) => {
  const inputControl = element.parentElement; //catch input container div
  const errorDisplay = inputControl.querySelector('.error'); //catch error div 

  errorDisplay.innerText = message;
  inputControl.classList.add('error'); // catch all classes
  inputControl.classList.remove('success')
}
const setSuccess = element => {
  const inputControl = element.parentElement;
  
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success'); // 
  inputControl.classList.remove('error');
};
// Function to validate email format
const isValidEmail = email => {
	//set regular expression
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {

	// Redirect to the home page
	if(emailTrue === 1 && passTrue === 1){
	window.location.href = "../index.html";
	}
		//remove whitspaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	

	

	if(emailValue === '') {
	setError(email, 'Email is required');
	} else if (!isValidEmail(emailValue)) {
	setError(email, 'Provide a valid email address');
	} else {
	emailTrue = 1  ;
	setSuccess(email);
	
	}

	if(passwordValue === '') {
	setError(password, 'Password is required');
	} else if (passwordValue.length < 8 ) {
	setError(password, 'Password must be at least 8 character.')
	} else {
	passTrue = 1  ;
	setSuccess(password);
	
	}

	};
}


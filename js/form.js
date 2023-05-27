const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const nameError = document.querySelector('.name-error');
const emailError = document.querySelector('.email-error');
const messageError = document.querySelector('.message-error');
const btnSubmit = document.querySelector('.btn-submit');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Check if name field is empty
  if (nameInput.value.trim() === '') {

    nameInput.classList.add('is-error');
    nameError.classList.add('active');
    // nameInput.value = '';

  } else {

    nameInput.classList.remove('is-error');
    nameError.classList.remove('active');
    nameInput.value = '';
  }

  // Check if email field is empty or not formatted correctly
  if (emailInput.value.trim() === '') {
    // emailInput.setCustomValidity("Can't be empty");
    emailInput.classList.add('is-error');
    emailError.classList.add('active');
  } else if (!isValidEmail(emailInput.value.trim())) {
    // emailInput.setCustomValidity('Please use a valid email address');
    emailInput.classList.add('is-error');
    emailError.classList.add('active');
    emailError.innerText = 'Please use a valid email address';
    console.log('Please use a valid email address');
  } else {
    emailInput.value = '';
    emailInput.classList.remove('is-error');
    emailError.classList.remove('active');
  }

  // Check if message field is empty
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('is-error');
    messageError.classList.add('active');
    console.log("Can't be empty");
  } else {
    messageInput.classList.remove('is-error');
    messageError.classList.remove('active');
    messageInput.value = '';
  }

  form.reportValidity();
});

// Function to validate email format
function isValidEmail(email) {
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // return emailRegex.test(email);

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

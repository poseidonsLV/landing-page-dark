// ELEMENTS
let getStartedInput = document.querySelector('.get-started-input')
let submitForm = document.querySelector('.submit-form')
let errorIcon = document.querySelector('.email-error-icon')
let emailMsg = document.querySelector('.get-started-msg')

// EVENT LISTENERS
submitForm.addEventListener('submit', submitEmail)

// FUNCTIONS

function submitEmail(e){
  e.preventDefault()
  if (
    getStartedInput.value.length < 6 ||
    (getStartedInput.value.includes("@") !== true && getStartedInput.value.length >= 6) ||
    getStartedInput.value.includes("/")
  ) {
    errorIcon.classList.add("active");
    emailMsg.classList.add("err");
    emailMsg.innerText = 'Looks like this is not email';
  } else {
    errorIcon.classList.remove("active");
    emailMsg.classList.add("succ");
    emailMsg.innerText = "Successfully sent email";
    setTimeout(() => {
      emailMsg.classList.remove("succ");
      emailMsg.innerText = "";
    }, 3000)
  }
}

// ELEMENTS
// let getStartedInput = document.querySelector('.get-started-input')
// let submitForm = document.querySelector('.submit-form')
// let errorIcon = document.querySelector('.email-error-icon')
// let emailMsg = document.querySelector('.get-started-msg')
//
// // EVENT LISTENERS
// submitForm.addEventListener('submit', submitEmail)
//
// // FUNCTIONS
//
// function submitEmail(e){
//   e.preventDefault()
//   if (
//     getStartedInput.value.length < 6 ||
//     (getStartedInput.value.includes("@") !== true && getStartedInput.value.length >= 6) ||
//     getStartedInput.value.includes("/")
//   ) {
//     errorIcon.classList.add("active");
//     emailMsg.classList.add("err");
//     emailMsg.innerText = 'Looks like this is not email';
//   } else {
//     errorIcon.classList.remove("active");
//     emailMsg.classList.add("succ");
//     emailMsg.innerText = "Successfully sent email";
//     setTimeout(() => {
//       emailMsg.classList.remove("succ");
//       emailMsg.innerText = "";
//     }, 3000)
//   }
// }


function illustrationSwitch() {
  const illustration1 = document.querySelector(".more-info.tab-1");
  const illustration2 = document.querySelector(".more-info.tab-2");
  const illustration3 = document.querySelector(".more-info.tab-3");

  features = document.querySelectorAll("#col");
  features.forEach((item) => {
    item.addEventListener("click", function () {
      features.forEach((item) => {
        item.classList.remove("active");
      });
      item.classList.add("active");
      if (item.children[0].className.includes("tab-1")) {
        illustration1.classList.add("active");
        illustration2.classList.remove("active");
        illustration3.classList.remove("active");
      } else if (item.children[0].className.includes("tab-2")) {
        illustration1.classList.remove("active");
        illustration3.classList.remove("active");
        illustration2.classList.add("active");
      } else if (item.children[0].className.includes("tab-3")) {
        illustration1.classList.remove("active");
        illustration2.classList.remove("active");
        illustration3.classList.add("active");
      }
    });
  });
}
illustrationSwitch();

window.addEventListener('load', function() {
  var iframeElement = document.querySelector('.lmtWIHO_gkbTeeyuvoJC.mOUYF5ZmuNL6I7t0mSFg');
  if (iframeElement) {
    var iframeDocument = iframeElement.contentDocument || iframeElement.contentWindow.document;
    iframeDocument.body.style.backgroundColor = 'red';
  }
});

// couner number running
$('.counter').countUp();

// form custom error message

// window.addEventListener("DOMContentLoaded", function(){
//   var femail = document.getElementById("femail");
//   femail.addEventListener("input", function(){
//     if (femail.validity.typeMismatch || femail === '') {
//       femail.setCustomValidity("Check your email");
//       femail.reportValidity();
//     } else {
//       femail.setCustomValidity("");
//     }
//   });
// });

function check () {
  // (C1) INIT
  var valid = true, error = "", field = "";

  // (C2) NAME
  field = document.getElementById("femail");
  error = document.getElementById("input-error");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("error");
    error.classList.add("error-msg");
  } else {
    field.classList.remove("error");
    error.classList.remove("error-msg");
  }

  // (C4) RESULT - make it 'valid' for working
  return false;
}
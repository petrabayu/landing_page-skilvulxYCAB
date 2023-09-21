// Untuk solusi No.6 - 11 dikerjakan di script.js

//solusi no.6
function handleGetFormData() {
  const formData = {};
  formData.name = document.getElementById("name").value;
  formData.city = document.getElementById("city").value;
  formData.email = document.getElementById("email").value;
  formData.zipCode = document.getElementById("zip-code").value;
  formData.status = document.getElementById("status").checked;
  return formData;
}

//solusi no.7
function isNumber(input) {
  return !isNaN(input);
}

//solusi no.8
function checkboxIsChecked() {
  const checkedStatus = handleGetFormData().status;
  return checkedStatus;
}

//solusi no.9
function validateFormData({ name, city, email, zipCode, status }) {
  if (
    (name,
    city,
    email,
    zipCode,
    status !== null && isNumber(zipCode) && checkboxIsChecked())
  )
    return true;
  else return false;
}

//solusi no.10
function submit() {
  event.preventDefault();

  const validation = validateFormData(handleGetFormData());
  const warning = document.getElementById("warning");

  if (validation === false) {
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    warning.textContent = "";
  }
}

const form = document.getElementById("my-form");
form.addEventListener("submit", submit);

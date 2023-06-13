const form = document.querySelector(".login-form");
form.addEventListener("submit", manualSubmit);

function manualSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Please enter Email or Password!");
  }
  const resetData = { email: email.value, password: password.value };
  console.log(resetData);
  event.currentTarget.reset();
}

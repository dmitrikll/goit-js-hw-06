const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", checkSubmit);

function checkSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please enter your Email and Password");
  };

  const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
};
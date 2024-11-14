function validateForm() {
  const name = document.querySelector(".name").value;
  const phone = document.querySelector(".phone").value;
  const email = document.querySelector("[name='email']").value;
  const newPassword = document.querySelector(".newPassword").value;
  const confirmPassword = document.querySelector(".confirmPasswrod").value;
  
  // Error message elements
  const errorName = document.querySelector(".errorName");
  const phoneError = document.querySelector(".phoneError");
  const mailError = document.querySelector(".mailError");
  const passError = document.querySelector(".passError");
  const confirmError = document.querySelector(".confirmError");

  // Clear previous error messages
  errorName.innerText = "";
  phoneError.innerText = "";
  mailError.innerText = "";
  passError.innerText = "";
  confirmError.innerText = "";

  // Name validation
  if (name === "") {
    errorName.innerText = "Please enter your name.";
    return false;
  }

  // Phone validation (10-digit check)
  if (phone.length !== 10 || isNaN(phone)) {
    phoneError.innerText = "Please enter a valid 10-digit phone number.";
    return false;
  }

  // Email validation using regex
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]/;
  if (!emailRegex.test(email)) {
    mailError.innerText = "Please enter a valid email address.";
    return false;
  }

  // Password validation using regex (at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character)
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(newPassword)) {
    passError.innerText = "Password must be at least 8 characters long, include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
    return false;
  }

  // Confirm password validation
  if (confirmPassword !== newPassword) {
    confirmError.innerText = "Passwords do not match!";
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}

function validatForm() {
  const name = document.querySelector(".name").value;
  const phone = document.querySelector(".phone").value;
  const email = document.querySelector(".email").value;
  const newPassword = document.querySelector(".newPassword").value;
  const confirmPasswrod = document.querySelector(".confirmPasswrod").value;
  const errorName = document.querySelector(".errorName").value;
  const phoneError = document.querySelector(".phoneError").value;
  const mailError = document.querySelector(".mailError").value;
  const passError = document.querySelector(".passError").value;
  const confirmError = document.querySelector(".confirmError").value;

  if (name === "") {
    errorName.innerText = "Please enter your name.";
    return false; // Prevents form submission
  }
  if (phone.length === 10 ) {
    errorName.innerText = "Please enter your name.";
    return false; // Prevents form submission
  }

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    mailError.innerText = "Please enter a valid email address.";
    return false; // Prevents form submission
  }

  
}

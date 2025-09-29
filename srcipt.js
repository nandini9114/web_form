const form = document.getElementById("contactForm");
const errName = document.getElementById("err-name");
const errEmail = document.getElementById("err-email");
const errPhone = document.getElementById("err-phone");
const errMessage = document.getElementById("err-message");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Reset errors
  errName.textContent = "";
  errEmail.textContent = "";
  errPhone.textContent = "";
  errMessage.textContent = "";
  formStatus.textContent = "";
  formStatus.className = "status";

  let ok = true;

  // Name
  if (form.name.value.trim() === "") {
    errName.textContent = "Enter your name";
    ok = false;
  }

  // Email
  const email = form.email.value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    errEmail.textContent = "Enter a valid email";
    ok = false;
  }

  // Phone
  const phone = form.phone.value.trim();
  if (!/^\d{10}$/.test(phone)) {
    errPhone.textContent = "Enter a 10-digit phone number";
    ok = false;
  }

  // Message
  if (form.message.value.trim() === "") {
    errMessage.textContent = "Enter your message";
    ok = false;
  }

  // Final status
  if (ok) {
    formStatus.textContent = "✅ Form submitted successfully!";
    formStatus.classList.add("ok");
    form.reset();
  } else {
    formStatus.textContent = "❌ Please fix the errors above.";
    formStatus.classList.add("err");
  }
});
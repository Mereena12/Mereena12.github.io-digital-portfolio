// ===== Login Validation =====
const loginForm = document.getElementById("loginForm");
const formMessage = document.getElementById("formMessage");

// Set the correct password here
const correctPassword = "123";

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
      formMessage.textContent = "Both fields are required!";
      formMessage.style.color = "red";
      return;
    }

    // Allow any username, but password must be 123
    if (password === correctPassword) {
      formMessage.textContent = "Login successful!";
      formMessage.style.color = "green";

      // Redirect to portfolio page
      window.location.href = "portfolio.html";
    } else {
      formMessage.textContent = "Invalid password!";
      formMessage.style.color = "red";
    }
  });
}

// ===== Feedback Form Validation =====
const feedbackForm = document.getElementById("feedbackForm");
const feedbackMessage = document.getElementById("feedbackMessage");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("visitorName").value.trim();
    const email = document.getElementById("visitorEmail").value.trim();
    const message = document.getElementById("visitorMessage").value.trim();

    if (name === "" || email === "" || message === "") {
      feedbackMessage.textContent = "All fields are required!";
      feedbackMessage.style.color = "red";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      feedbackMessage.textContent = "Please enter a valid email!";
      feedbackMessage.style.color = "red";
      return;
    }

    feedbackMessage.textContent = "Thank you for your feedback!";
    feedbackMessage.style.color = "green";

    feedbackForm.reset();
  });
}
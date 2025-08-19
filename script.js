let form = document.getElementById("myForm");
let username = document.getElementById("username");
let password = document.getElementById("password");
let output = document.getElementById("output");

// 1. Submit event
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page reload
  
  if (password.value.length < 8) {
    output.innerText = "❌ Password must be at least 8 characters!";
    output.style.color = "red";
  } else {
    output.innerText = "✅ Form submitted successfully!";
    output.style.color = "green";
  }
});

// 2. Input event
username.addEventListener("input", () => {
  output.innerText = "Typing username: " + username.value;
});

// 3. Focus events
username.addEventListener("focus", () => {
  username.style.backgroundColor = "#ffffcc"; // light yellow
});

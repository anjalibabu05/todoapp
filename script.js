// Example default user for testing
if (!localStorage.getItem('users')) {
  const defaultUsers = [
    { username: 'anjaly', email: 'anjaly@example.com', password: '1234' },
    { username: 'demo', email: 'demo@example.com', password: 'demo123' }
  ];
  localStorage.setItem('users', JSON.stringify(defaultUsers));
}

function handleLogin() {
  const username = document.getElementById("usernameInput").value.trim();
  const email = document.querySelector("input[type='email']").value.trim();
  const password = document.querySelector("input[type='password']").value;

  if (!username || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const existingUser = users.find(u => u.email === email);

  if (existingUser) {
    if (existingUser.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      window.location.href = "landing.html";
    } else {
      alert("Wrong password.");
    }
  } else {
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
    window.location.href = "landing.html";
  }
}

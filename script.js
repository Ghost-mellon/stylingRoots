function login() {
    // Get values from input fields
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simulate a server-side authentication
    // In a real-world scenario, you would send a request to the server for authentication
    if (username === "exampleUser" && password === "examplePassword") {
        alert("Login successful!");
        // Redirect to the user's dashboard or perform other actions
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
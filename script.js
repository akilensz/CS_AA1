function validateForm() {

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("birthError").innerHTML = "";
    document.getElementById("sexError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("userError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    document.getElementById("issueError").innerHTML = "";
    document.getElementById("solutionError").innerHTML = "";
    document.getElementById("usageError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";

    let isValid = true;


    let name = document.getElementById("fullName").value.trim();
    if (name.length < 2) {
        document.getElementById("nameError").innerHTML = "Name must be at least 2 characters.";
        isValid = false;
    }

    let birth = document.getElementById("birthdate").value;
    if (birth === "") {
        document.getElementById("birthError").innerHTML = "Birthdate is required.";
        isValid = false;
    }

    let sex = document.getElementsByName("sex");
    let sexSelected = false;
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sexSelected = true;
        }
    }
    if (!sexSelected) {
        document.getElementById("sexError").innerHTML = "Select your sex.";
        isValid = false;
    }

    let email = document.getElementById("email").value;
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        document.getElementById("emailError").innerHTML = "Enter a valid email.";
        isValid = false;
    }

    let username = document.getElementById("username").value;
    let pattern = /^[a-zA-Z0-9]+$/;

    if (username.length < 8 || username.length > 20) {
        document.getElementById("userError").innerHTML = "Username must be 8–20 characters.";
        isValid = false;
    }

    if (!pattern.test(username)) {
        document.getElementById("userError").innerHTML += " Letters and numbers only.";
        isValid = false;
    }

    let password = document.getElementById("password").value;

    if (password.length < 10) {
        document.getElementById("passError").innerHTML = "Password must be at least 10 characters.";
        isValid = false;
    }

    if (!/[A-Z]/.test(password)) {
        document.getElementById("passError").innerHTML += " Must have uppercase.";
        isValid = false;
    }

    if (!/[a-z]/.test(password)) {
        document.getElementById("passError").innerHTML += " Must have lowercase.";
        isValid = false;
    }

    if (!/[0-9]/.test(password)) {
        document.getElementById("passError").innerHTML += " Must have a number.";
        isValid = false;
    }

    let confirm = document.getElementById("confirmPassword").value;
    if (confirm !== password) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    let issue = document.getElementById("issue").value;
    if (issue === "") {
        document.getElementById("issueError").innerHTML = "Select an issue.";
        isValid = false;
    }

    let solutions = document.getElementsByName("solutions");
    let checked = false;
    for (let i = 0; i < solutions.length; i++) {
        if (solutions[i].checked) {
            checked = true;
        }
    }
    if (!checked) {
        document.getElementById("solutionError").innerHTML = "Select at least one solution.";
        isValid = false;
    }

    let usage = document.getElementsByName("usage");
    let usageSelected = false;
    for (let i = 0; i < usage.length; i++) {
        if (usage[i].checked) {
            usageSelected = true;
        }
    }
    if (!usageSelected) {
        document.getElementById("usageError").innerHTML = "Select your usage frequency.";
        isValid = false;
    }

    // Sucesss messaggee
    if (isValid) {
        document.getElementById("successMsg").innerHTML = "Successfully signed up! 🌱";
    }

    return isValid;
}
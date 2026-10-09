document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let email = document.getElementById("email").value.trim();
    let course = document.getElementById("course").value;
    let file = document.getElementById("file").files[0];

    document.getElementById("nameError").innerText = "";
    document.getElementById("rollError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("courseError").innerText = "";
    document.getElementById("fileError").innerText = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText =
            "Student name is required";
        valid = false;
    }

    if (roll === "") {
        document.getElementById("rollError").innerText =
            "Roll number is required";
        valid = false;
    }

    let emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText =
            "Enter a valid email address";
        valid = false;
    }

    if (course === "") {
        document.getElementById("courseError").innerText =
            "Please select a course";
        valid = false;
    }

    if (!file) {
        document.getElementById("fileError").innerText =
            "Please upload a document";
        valid = false;
    }

    if (valid) {

        document.getElementById("successMessage").innerText =
            "Registration successful!";

        alert("Student registered successfully!");
    }

});
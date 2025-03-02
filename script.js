function toggleReadMore() {
    var readMoreSection = document.querySelector('.read-more');
    var readMoreButton = document.querySelector('.show-more');
    if (readMoreSection.style.display === 'none' || readMoreSection.style.display === '') {
        readMoreSection.style.display = 'block';
        readMoreButton.textContent = 'Read Less';
    } else {
        readMoreSection.style.display = 'none';
        readMoreButton.textContent = 'Read More';
    }
}

document.getElementById("contactForm").addEventListener("submit", function (event) {
    let isValid = true;

    // Name Validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required!";
        isValid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email Validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email!";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Message Validation
    const message = document.getElementById("message").value.trim();
    if (message === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty!";
        isValid = false;
    } else {
        document.getElementById("messageError").textContent = "";
    }

    // If invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});

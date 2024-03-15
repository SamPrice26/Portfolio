const form = document.getElementById('form');
const result = document.getElementById('result');
const submitButton = form.querySelector('button[type="submit"]'); // Assuming there's only one submit button in your form

form.addEventListener('submit', function(e) {
    e.preventDefault();
    submitButton.disabled = true; // Disable the submit button to prevent multiple submissions
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.style.display = "block"; // Ensure result is visible
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
    })
    .then(async (response) => {
        const jsonResponse = await response.json(); // Renamed to avoid shadowing
        if (response.status == 200) {
            result.innerHTML = "Form submitted successfully";
        } else {
            console.log(response);
            result.innerHTML = jsonResponse.message; // Use jsonResponse here
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
    })
    .finally(() => { // Using finally to reset the form and handle the submit button
        form.reset();
        setTimeout(() => {
            result.style.display = "none";
            submitButton.disabled = false; // Re-enable the submit button
        }, 3000);
    });
});
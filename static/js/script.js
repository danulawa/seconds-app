document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".input-field");
    const resultElement = document.getElementById("result");
    const errorMessage = document.getElementById("error-message");

    const updateResult = () => {
        let years = parseInt(document.getElementById("years").value) || 0;
        let months = parseInt(document.getElementById("months").value) || 0;
        let days = parseInt(document.getElementById("days").value) || 0;
        let hours = parseInt(document.getElementById("hours").value) || 0;
        let minutes = parseInt(document.getElementById("minutes").value) || 0;
        let seconds = parseInt(document.getElementById("seconds").value) || 0;

        // Convert all to seconds
        let totalSeconds =
            years * 365.24225 * 24 * 60 * 60 +
            months * 30 * 24 * 60 * 60 +
            days * 24 * 60 * 60 +
            hours * 60 * 60 +
            minutes * 60 +
            seconds;

        resultElement.textContent = `${parseInt(totalSeconds).toLocaleString()} Seconds`;
        resultElement.style.visibility = "visible";
        errorMessage.style.visibility = "hidden";
    };

    const validateInput = (input) => {
        const min = parseInt(input.min);
        const max = parseInt(input.max);
        const value = parseInt(input.value) || 0;

        if (value < min || value > max) {
            input.classList.add("is-invalid");
            return false;
        } else {
            input.classList.remove("is-invalid");
            return true;
        }
    };

    const handleValidation = () => {
        let allValid = true;
        inputs.forEach((input) => {
            if (!validateInput(input)) {
                allValid = false;
            }
        });

        if (!allValid) {
            errorMessage.style.visibility = "visible";
            resultElement.style.visibility = "hidden";
        } else {
            updateResult();
        }
    };

    inputs.forEach((input) => {
        input.addEventListener("input", handleValidation);
    });

    // Initialize result on page load
    handleValidation();
});

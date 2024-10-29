document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const inputRow = document.getElementById("inputRow");

    // Initially hide the row
    inputRow.style.display = "none";

    toggleButton.addEventListener("click", function() {
        if (inputRow.style.display === "none") {
            inputRow.style.display = "flex"; // Show the input row
        } else {
            inputRow.style.display = "none"; // Hide the input row
        }
    });
});
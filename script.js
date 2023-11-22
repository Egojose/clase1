function processInput() {
    // Get values from input fields
    var foodType = document.getElementById('foodType').value;
    var toppings = document.getElementById('toppings').value;

    // Validate if both fields are filled
    if (foodType && toppings) {
        // Display the options in the 'root' div
        var rootDiv = document.getElementById('root');
        rootDiv.innerHTML = "You selected: " + foodType + " with toppings: " + toppings;
    } else {
        alert('Please fill in both fields.');
    }
}
function processInput() {
    // Get values from input fields
    var foodType = document.getElementById('foodType');
    var selectedFoodIndex = foodType.selectedIndex;

    // Get the selected option value
    var selectedFoodType = foodType.options[selectedFoodIndex].value;
    var toppings = document.getElementById('toppings').value;

    // Validate if both fields are filled
    if (selectedFoodType && toppings) {
        // Display the options in the 'root' div
        var rootDiv = document.getElementById('root');
        rootDiv.innerHTML = "Seleccionaste: " + selectedFoodType + " con toppings: " + toppings;
    } else {
        alert('Please fill in both fields.');
    }
}
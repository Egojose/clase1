const myConst = 'Hola'



function processInput() {
    // Get values from input fields
    let tipoComida = document.getElementById('tipoComida');
    var indiceSeleccionado = tipoComida.selectedIndex;

    // Get the selected option value
    var comidaSeleccionada = tipoComida.options[indiceSeleccionado].value;
    var toppings = document.getElementById('toppings').value;

    // Validate if both fields are filled
    if (comidaSeleccionada && toppings) {
        // Display the options in the 'root' div
        var rootDiv = document.getElementById('root');
        rootDiv.innerHTML = `Seleccionaste: ${comidaSeleccionada.toUpperCase()} con toppings: ${toppings.toUpperCase()}`;
        
    } else if(comidaSeleccionada && !toppings) {
        alert('Solo seleccionaste ' + comidaSeleccionada)
    } else if(toppings && !comidaSeleccionada) {
        alert ('solo seleccionaste el topping ' + toppings)
    }
    
    else {
        alert('Todos los campos son requeridos.');
    }
}

function reasignar() {
    foodType = 'Hola'
}
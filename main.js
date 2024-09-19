const robot = require("robotjs");

// Espera un poco antes de comenzar
setTimeout(() => {
    // Mueve el ratón a la posición (500, 500)

    // Simula presionar 'enter'
    robot.keyTap("w");
    robot.keyTap("s");
    robot.keyTap("s");

}, 2000); // Espera 2 segundos para dar tiempo a preparar la pantalla

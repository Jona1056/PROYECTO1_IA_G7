const robot = require("robotjs");

// Espera un poco antes de comenzar
setTimeout(() => {
    // Mueve el ratón a la posición (500, 500)
    robot.moveMouse(500, 500);
    
    // Realiza un clic del ratón
    robot.mouseClick();
    
    // Espera medio segundo (500 ms)
    robot.setMouseDelay(500);

    // Escribe un texto
    robot.typeString("Hola, mundo desde RobotJS!");

    // Simula presionar 'enter'
    robot.keyTap("enter");
}, 2000); // Espera 2 segundos para dar tiempo a preparar la pantalla

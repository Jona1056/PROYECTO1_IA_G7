const express = require('express');
const robot = require('robotjs');
const cors = require('cors'); // Importar cors
const app = express();
const port = 3000;

// Agregar CORS
app.use(cors()); // Esto habilita CORS para todas las rutas

// Permitir servir archivos estáticos como el HTML
app.use(express.static('public'));

// Ruta para recibir movimientos desde el navegador
app.get('/moverMario/:direccion', (req, res) => {
    const direction = req.params.direccion;

    // Hacer el movimiento y luego esperar 2 segundos antes de enviar la respuesta
    setTimeout(() => {
        res.send('Movimiento realizado');
    }, 0);
    if (direction === 'arriba') {
        robot.keyTap('w');
    } else if (direction === 'izquierda') {
        robot.keyTap('a');
    } else if (direction === 'abajo') {
        robot.keyTap('s');
    } else if (direction === 'derecha') {
        robot.keyTap('d');
    }


  
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

const express = require('express');
const app = express();
const PORT = 3000; // Puerto en el que se ejecutará el servidor

// Endpoint para el registro
app.post('/registro', (req, res) => {
    // Aquí deberías procesar la información recibida del usuario para registrar una nueva cuenta
    // Por simplicidad, este ejemplo solo devuelve un mensaje de éxito
    res.send('Registro exitoso');
});

// Endpoint para el inicio de sesión
app.post('/login', (req, res) => {
    const { usuario, contraseña } = req.body;

    // Aquí deberías verificar la autenticación del usuario
    // Por simplicidad, este ejemplo simplemente compara con datos estáticos
    if (usuario === 'usuario' && contraseña === 'contraseña') {
        res.send('Autenticación satisfactoria');
    } else {
        res.status(401).send('Error en la autenticación');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

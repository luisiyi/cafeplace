const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

//Settings-configuración
app.set('port', process.env.PORT || 3000);//enviando puerto de la pc a la nuve

//Middlewares-funciones que se ejecutan antes de que lleguen a las rutas
app.use(morgan('dev'));
app.use(express.json());//función que comprueba los datos si son formatos JSON

//Routes-URL's del servidor
app.use('/api',require('./routes/routes'));

//Static files-donde estan los archivos estaticos como html, ccs, js que estan en carpeta public
app.use(express.static(path.join(__dirname, 'public')));



//Empezando el servidor
app.listen(app.get('port'), ()=>{
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});
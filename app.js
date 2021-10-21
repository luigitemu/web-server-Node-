require('dotenv').config();

const express = require('express')
const app = express();
const hbs = require('hbs');


const port = process.env.PORT;
 

// Servir contenido Estatico 

app.use( express.static('public') );

// TODO: require HBS
app.set('view engine', 'hbs');

// Cargar Parciales HBS
hbs.registerPartials(__dirname + '/views/partials' );


app.get('/' , (req , res )=>{
    res.render('home' , {
        nombre: 'Luis  Tejada',
        titulo: 'Curso de Node JS '
    });
});

app.get('/generic' , (req , res )=>{
    res.render('generic' , {
        nombre: 'Luis  Tejada',
        titulo: 'Curso de Node JS '
    });
});
app.get('/elements' , (req , res )=>{
    res.render('elements' , {
        nombre: 'Luis  Tejada',
        titulo: 'Curso de Node JS '
    });
});
app.get('*' , (req , res )=>{
    res.send('404 | Page not Found')
})
 
app.listen(port , ()=>{
    console.log('Aplicacion corriendo en el puerto ' + port )
});
/*
npm install jade --save

title #{title} /*interpolasión con express indicando que es un id*/


const express = require('express'),
    path = require('path'),
    app = express();

    app.set('views',__dirname + '/views')//*Indicamos la ruta de las vistas
    app.set('view engine','jade')//
    
//Middleware
app.use(express.static(path.join(__dirname,'/public')))

app.get('/',(req, res)=>{
    res.render('HOME',{
        title: 'Página Principal'   
    })
})

app.get('/acerca',(req, res)=>{
    res.render('acerca',{
        title: 'Nosotros'   
    })
})

app.get('/noticia1',(req, res)=>{
    res.render('noticia1',{
        title: 'TECNOLOGÍA'   
    })
})

app.get('/noticia2',(req, res)=>{
    res.render('noticia2',{
        title: 'DEPORTES - CICLISMO'   
    })
})

app.get('/noticia3',(req, res)=>{
    res.render('noticia3',{
        title: 'SALUD'   
    })
})

app.get('/noticia4',(req, res)=>{
    res.render('noticia4',{
        title: 'DEPORTES - FUTBOL'   
    })
})

app.get('/noticia5',(req, res)=>{
    res.render('noticia5',{
        title: 'COLOMBIA'   
    })
})
app.listen(8002)
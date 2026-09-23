//console.log("hello world");
import express from 'express' // type module 

import router from './src/router/exercicio.js'


// const espress =  (require express")// type common JS

const app = express() // inicializando o express = new
// const  exemplo = o (não muda, inicio e fim mesmo valor) 
//let pode ser alterada ( inicio zero, depois pode ser alterada)
// var 
app.use(express.json()) // para receber json no body

app.use(router) // para usar o router





app.listen(3000, () => {
    console.log("Servidor na porta 3000");
})

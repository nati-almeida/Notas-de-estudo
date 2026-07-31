//console.log("hello world");
import express from 'express' // type module 

// const espress =  (require express")// type common JS

const app = express() // inicializando o express = new
  // const  exemplo = o (não muda, inicio e fim mesmo valor) 
  //let pode ser alterada ( inicio zero, depois pode ser alterada)
  // var 

app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
  res.send({message: num1 + num2})

})

app.listen(3000, () => {
  console.log('Servidor rodando na porta3000')
})

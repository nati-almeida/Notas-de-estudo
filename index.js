//console.log("hello world");
import express from 'express' // type module 

// const espress =  (require express")// type common JS

const app = express() // inicializando o express = new
  // const  exemplo = o (não muda, inicio e fim mesmo valor) 
  //let pode ser alterada ( inicio zero, depois pode ser alterada)
  // var 
  app.use(express.json()) // para receber json no body

app.get("/api/somar", (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
  res.send({message: num1 + num2})

})


app.get("/api/salario/:valor/:hora", (req, res) => {
   const valorGanho = Number(req.params.valor) 
   const horaTrabalhada = Number(req.params.hora)
   res.send({message: valorGanho * horaTrabalhada})
})

//Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
app.get("/api/media/:peso1/:peso2/:peso3/:peso4/:peso5", (req, res) => {
  const peso1 = Number(req.params.peso1);
  const peso2 = Number(req.params.peso2);
  const peso3 = Number(req.params.peso3);
  const peso4 = Number(req.params.peso4);
  const peso5 = Number(req.params.peso5);
  const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
  res.send({message: media});
});

//Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
app.get("/api/temperatura/:celsius", (req, res) => {
  const celsius = Number(req.params.celsius);
  const fahrenheit = (9 * celsius + 160) / 5;
  res.send({message: fahrenheit});
});


//Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
app.get("/api/distancia/:milhas", (req, res) => {
  const milhas = Number(req.params.milhas);
  const quilometros = milhas * 1.60934;
  res.send({message: quilometros});
});


//6. Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
app.get("/api/duracao/:segundos", (req, res) => {
  const segundos = Number(req.params.segundos);
  const horas = Math.floor(segundos / 3600);  
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;
  res.send({message: `${horas} horas, ${minutos} minutos, ${segundosRestantes} segundos`});
});

//7. Peça uma distância em quilômetros e converta para metros e centímetros.
app.get("/api/conversao/:quilometros", (req, res) => {
  const quilometros = Number(req.params.quilometros);
  const metros = quilometros * 1000;
  const centimetros = quilometros * 100000;
  res.send({message: `${metros} metros, ${centimetros} centímetros`});
}); 


//8. Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).
app.get("/api/tabuada/:numero", (req, res) => {
    const numero = Number(req.params.numero)
    const tabuada = []

    for (let i = 0; i <= 10; i++) {
        tabuada.push(`${numero} x ${i} = ${numero * i}`)
    }

    res.send({ tabuada: tabuada })
})


app.post("/api/somar", (req, res) => {
    const num1 = (req.body.num1)
    const num2 = (req.body.num2)
  res.send({resultado: num1 + num2})
})




//////////////////////////////////////////////POST////////////////////////////////////////////

//1.Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
app.post("/api/somar", (req, res) => {
    const num1 = (req.body.num1)
    const num2 = (req.body.num2)
  res.send({resultado: num1 + num2})
})

//2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
app.post("/api/salario", (req, res) => {
    const valorGanho = req.body.valorGanho
    const horaTrabalhada = req.body.horaTrabalhada
    res.send({message: valorGanho * horaTrabalhada})
})

//3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
app.post("/api/media", (req, res) => {
  const p1 = req.body.p1;
  const p2 = req.body.p2;
  const p3 = req.body.p3;
  const p4 = req.body.p4;
  const p5 = req.body.p5;

  const media = (p1 + p2 + p3 + p4 + p5) / 5

  res.send({ message: media});

})

//4. Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5


//5. Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)


//6. Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.


//7. Peça uma distância em quilômetros e converta para metros e centímetros.


//8. Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).


app.listen(3000, () => {
    console.log("Servidor rodando porta 3000")
})
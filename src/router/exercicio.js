import express from "express";
import ControllerExercicio from '../controller/exercicio.js'

const router = express.Router();



router.get("/api/:somar",ControllerExercicio.Somar)
router.get("/api/salario/:valor/:hora", ControllerExercicio.Salario)


//Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
router.get("/api/media/:peso1/:peso2/:peso3/:peso4/:peso5", ControllerExercicio.Media)

//Peça uma temperatura em graus Celsius e converta para Fahrenheit usando a fórmula:    F = (9 * C + 160) / 5
router.get("/api/temperatura/:celsius", (req, res) => {
  const celsius = Number(req.params.celsius);
  const fahrenheit = (9 * celsius + 160) / 5;
  res.send({message: fahrenheit});
});


//Peça uma distância em milhas e converta para quilômetros.    (Dica: 1 milha = 1.60934 km)
router.get("/api/distancia/:milhas", (req, res) => {
  const milhas = Number(req.params.milhas);
  const quilometros = milhas * 1.60934;
  res.send({message: quilometros});
});


//6. Peça a duração de um evento em segundos. Mostre esse tempo em horas, minutos e segundos.
router.get("/api/duracao/:segundos", (req, res) => {
  const segundos = Number(req.params.segundos);
  const horas = Math.floor(segundos / 3600);  
  const minutos = Math.floor((segundos % 3600) / 60);
  const segundosRestantes = segundos % 60;
  res.send({message: `${horas} horas, ${minutos} minutos, ${segundosRestantes} segundos`});
});

//7. Peça uma distância em quilômetros e converta para metros e centímetros.
router.get("/api/conversao/:quilometros", (req, res) => {
  const quilometros = Number(req.params.quilometros);
  const metros = quilometros * 1000;
  const centimetros = quilometros * 100000;
  res.send({message: `${metros} metros, ${centimetros} centímetros`});
}); 


//8. Peça um número inteiro e mostre a tabuada dele (do 0 até o 10).
router.get("/api/tabuada/:numero", (req, res) => {
    const numero = Number(req.params.numero)
    const tabuada = []

    for (let i = 0; i <= 10; i++) {
        tabuada.push(`${numero} x ${i} = ${numero * i}`)
    }

    res.send({ tabuada: tabuada })
})


//////////////////////////////////////////////POST////////////////////////////////////////////

//1.Peça ao usuário dois números com casas decimais (números reais), some os dois e mostre o resultado.
//app.post("/api/somar", (req, res) => {

//2. Peça o valor que a pessoa ganha por hora e a quantidade de horas trabalhadas no mês. Mostre quanto ela vai receber no final do mês.
//router.post("/api/salario", (req, res) => {
 //   const valorGanho = req.body.valorGanho
   // const horaTrabalhada = req.body.horaTrabalhada
   // res.send({message: valorGanho * horaTrabalhada})
//})

//3. Peça o peso de 5 pessoas e calcule a média desses pesos. Mostre o resultado.
//router.post("/api/media", (req, res) => {
//  const p1 = req.body.p1;
//  const p2 = req.body.p2;
 // const p3 = req.body.p3;
 // const p4 = req.body.p4;
 // const p5 = req.body.p5;

 // const media = (p1 + p2 + p3 + p4 + p5) / 5

 // res.send({ message: media});

//})




//router.post("/api/somar", (req, res) => {
//    const num1 = Number(req.body.num1)
//    const num2 = Number(req.body.num2)
//  res.send({resultado: num1 + num2})
//})

export default router
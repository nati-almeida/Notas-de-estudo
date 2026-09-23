import ServiceExercicio from '../service/exercicio.js'

class ControllerExercicio {

    Somar(req, res) {
    try{
        const num1 = req.body.num1
        const num2 = req.body.num2
        const soma = ServiceExercicio.Somar(num1, num2)
        res.send({soma})
    } catch (error){

    res.send({message: error.message})
    }
}    



    Salario(req, res) {
    const valorGanho = Number(req.params.valorGanho) 
    const horaTrabalhada = Number(req.horaTrabalhada)
    res.send({message: valorGanho * horaTrabalhada})
}

    Media(req, res) {
    const peso1 = Number(req.params.peso1);
    const peso2 = Number(req.params.peso2);
    const peso3 = Number(req.params.peso3);
    const peso4 = Number(req.params.peso4);
    const peso5 = Number(req.params.peso5);
    const media = (peso1 + peso2 + peso3 + peso4 + peso5) / 5;
    res.send({message: media});
}

}

export default new ControllerExercicio()
class ServiceExercicio{

    Somar(num1, num2){
        if(isNaN(num1) || isNaN(num2)){
            throw new Error("Favor informar somente números")
        }
        return num1 + num2
    }

}

export default new ServiceExercicio()

import Pessoa from '../model/pessoa.js'

class ServicePessoa{

    async Buscar(){
        return Pessoa.findAll()
    }

    BuscarUm(id){
        if(!id || isNaN(id)){
            throw new Error("Favor informar somente números")
        }

        return Pessoa.BuscarUm(id)
    }



   async Criar(nome){
        if(!nome){
            throw new Error("Favor informar o nome")
        }

       await Pessoa.create({ nome, idade})
    }



    async Alterar(id, nome){
        if(!id || (id) || isNaN(id) || !nome){
            throw new Error("Favor informar todos os dados")
        }
        const pessoaAlterar = await Pessoa.findByPk(id)

        if(!pessoaAlterar){
            throw new error ("pessoa não encontrada")
        }
        pessoaAlterar.nome = nome

        await pessoaAlterar.save()
    }



async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const pessoadelete = await Pessoa.findByPk(id)
        if(!pessoadelete){
            throw new Error("Favor informar o id corretamente")
        }
       await Pessoa.destroy(id)


}
}
export default new ServicePessoa()
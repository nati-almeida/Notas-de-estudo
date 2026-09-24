const nomes = new Array("Nati, Fabi, Gabi")


class Pessoa{
    Buscar() {
        return nomes
    }

    BuscarUm(id) {
        return[id] 
    }

    Criar(nome) {
        nomes.push(nome)
    }

    Alterar(id, nome) {
        nomes[id] = nome
    }

    Deletar(id) {
        nomes.splice(id, 1)
    }
}

export default new Pessoa()
function ativaBotao(){
    if((document.querySelector(".prato .marcado")!== null) && (document.querySelector(".bebida .marcado")!== null) && (document.querySelector(".sobremesa .marcado")!== null)){
        document.querySelector(".botao-inativo").classList.add("escondido")
        document.querySelector(".fechar-pedido").classList.remove("escondido")
    }
}

function marcadorprato(item){
    if(document.querySelector(".prato .marcado")!== null){
        document.querySelector(".prato .marcado").classList.remove("marcado")
    }
    item.classList.add("marcado")
    ativaBotao()
}

function marcadorbebida(item){
    if(document.querySelector(".bebida .marcado")!== null){
        document.querySelector(".bebida .marcado").classList.remove("marcado")
    }
    item.classList.add("marcado")
    ativaBotao()
}

function marcadorsobremesa(item){
    if(document.querySelector(".sobremesa .marcado")!== null){
        document.querySelector(".sobremesa .marcado").classList.remove("marcado")
    }
    item.classList.add("marcado")
    ativaBotao()
}

function fecharPedido(){
    document.querySelector(".conteiner-conf-pedido").classList.remove("escondido")
}

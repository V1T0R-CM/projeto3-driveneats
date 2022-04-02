let pratoEscolhido
let precoPrato
let bebidaEscolhida
let precoBebida
let sobremesaEscolhida
let precoSobremesa
let precoTotal


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
    pratoEscolhido=item.querySelector(".nome-prato").innerHTML
    precoPrato=item.querySelector(".preco-prato").innerHTML
    item.classList.add("marcado")
    ativaBotao()
}

function marcadorbebida(item){
    if(document.querySelector(".bebida .marcado")!== null){
        document.querySelector(".bebida .marcado").classList.remove("marcado")
    }
    bebidaEscolhida=item.querySelector(".nome-bebida").innerHTML
    precoBebida=item.querySelector(".preco-bebida").innerHTML
    item.classList.add("marcado")
    ativaBotao()
}

function marcadorsobremesa(item){
    if(document.querySelector(".sobremesa .marcado")!== null){
        document.querySelector(".sobremesa .marcado").classList.remove("marcado")
    }
    sobremesaEscolhida=item.querySelector(".nome-sobremesa").innerHTML
    precoSobremesa=item.querySelector(".preco-sobremesa").innerHTML
    item.classList.add("marcado")
    ativaBotao()
}

function convertePnum(valor){
    let valorNum
    valorStr =valor.slice(3,valor.length)
    valorNum=parseFloat(valorStr.replace(",","."))
    return valorNum
  }
  
  function convertePvalor(valorNum){
    let valor
    valorStr =valorNum.toFixed(2)
    valor="R$ "+valorStr.replace(".",",")
    return valor
  }

function convertePurl(texto){
    return texto.replace(/ /g,"%20")
}

function calculaConta(){
    let totalNum=convertePnum(precoPrato)+convertePnum(precoBebida)+convertePnum(precoSobremesa)
    precoTotal=convertePvalor(totalNum) 
}

function formataConfPedido(){
    document.querySelector(".prato-final h2").innerHTML=pratoEscolhido
    document.querySelector(".preco1").innerHTML=precoPrato
    document.querySelector(".bebida-final h2").innerHTML=bebidaEscolhida
    document.querySelector(".preco2").innerHTML=precoBebida
    document.querySelector(".sobremesa-final h2").innerHTML=sobremesaEscolhida
    document.querySelector(".preco3").innerHTML=precoSobremesa
    document.querySelector(".preco-total").innerHTML=precoTotal

}

function fecharPedido(){
    calculaConta()
    formataConfPedido()
    document.querySelector(".conteiner-conf-pedido").classList.remove("escondido")
}

function cancelaPedido(){
    document.querySelector(".conteiner-conf-pedido").classList.add("escondido")
}

function confirmaPedido(){
    const nomeCliente=prompt("Qual o seu nome?")
    const enderecoCliente=prompt("Qual o seu endereço?")
    const texto=`Olá, gostaria de fazer o pedido: - Prato: ${pratoEscolhido} - Bebida: ${bebidaEscolhida} - Sobremesa: ${sobremesaEscolhida} Total: ${precoTotal} Nome: ${nomeCliente} Endereço: ${enderecoCliente}`
    console.log(texto)
    const urlTexto=convertePurl(texto)
    console.log(urlTexto)
    const linkWpp=`https://wa.me/5521979239660?text=${urlTexto}`
    console.log(linkWpp)
    window.open(linkWpp,"_self");
}
function Converter(){
    
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    if(valor <= 0){        
        document.getElementById("valorConvertido").innerHTML = "Digite um Valor Maior Que 0";

    }else{
        var valorDaMoeda = document.getElementById("valorDaMoeda").value;

        var valorEmReal = parseFloat(valor) * valorDaMoeda;
        console.log(valorEmReal); 
    
        var elementoValorConvertido = document.getElementById("valorConvertido");
        var valorConvertido = "O resultado foi R$ " + valorEmReal;
        elementoValorConvertido.innerHTML = valorConvertido;

    }


    
}

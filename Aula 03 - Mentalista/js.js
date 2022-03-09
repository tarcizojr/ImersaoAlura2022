var numeroSecreto = parseInt(Math.random() * 11);
console.log(numeroSecreto)

var vidas = 3;

function Recarregar() { //  funçao para recarregar a pagina para    começar outro jogo
    location.reload() // recarregar  jogo
  }


function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);

    document.getElementById("resultado").innerHTML = chute

   
    if(chute > 10 || chute < 0){
        document.getElementById("resultado").innerHTML = "Cute um Numero ontre 0 e 10";

    }else{
        if(chute == numeroSecreto){
            document.getElementById("resultado").innerHTML = "Você Acertou"; //Aparece a msg que a pessoa acertou
                            
            setTimeout(Recarregar, 2000); //função para esperar alguns segundos antes de recarregar a pagina
                
            
        }else{ 
            if(vidas > 0){
                document.getElementById("resultado").innerHTML = "Você Errou, Resta " + vidas + " Tentativas ";
                    vidas--;

            }else{
                document.getElementById("resultado").innerHTML = "Suas Vidas Acabaram, Vamos sortear outro numero";

                setTimeout(Recarregar, 2000); //função para esperar alguns segundos antes de recarregar a pagina
            }
        
            
        
        }
    }

}
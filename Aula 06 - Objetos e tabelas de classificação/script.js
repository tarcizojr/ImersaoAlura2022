var tj = {ganhanado:"", nome:"TJ",vitorias:2, empates:3, derotas:2, pontos:0};
var fulano = {ganhanado:"", nome:"Fulano",vitorias:4, empates:3, derotas:4, pontos:0};
var gui = {ganhanado:"", nome:"Gui",vitorias:2, empates:1, derotas:2, pontos:0};

var jogadores = [tj, fulano, gui];

pontosDosJogadores(jogadores);
function pontosDosJogadores(jogadores){
    for(var i =0;i < jogadores.length;i++){
        jogadores[i].pontos = calculaPontos(jogadores[i]);
    }
}


function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;

    console.log(pontos);
    return(pontos)    
}

function ganhanado(jogadores){
    var naFrente = "";
    var empatado = "";
    

    if(jogadores.length == 1){
        naFrente = jogadores[0];
    }else{
        naFrente = jogadores[0];
        for(var i =1;i < jogadores.length;i++){
            jogadores[i].ganhanado ="";
            if(naFrente.pontos > jogadores[i].pontos){
                naFrente.ganhanado = "Ganhando";

            }else if(naFrente.pontos < jogadores[i].pontos){
                naFrente.ganhanado ="";
                naFrente = jogadores[i];
                naFrente.ganhanado = "Ganhando";
            }
            
        }
    }
    
}
ganhanado(jogadores);


function exibeJogadoresNaTela(jogadores){
    var elemento = "";

    for(var i =0;i < jogadores.length;i++){
       
        elemento += "<tr> <td>"+jogadores[i].ganhanado+"</td>"
        elemento += "<td>" +jogadores[i].nome+ "</td>"
        elemento += "<td>" +jogadores[i].vitorias+ "</td>"
        elemento += "<td>" +jogadores[i].empates+ "</td>"
        elemento += "<td>" +jogadores[i].derotas+ "</td>"
        elemento += "<td>" +jogadores[i].pontos+ "</td>"
        elemento += "<td><button onClick='adicionarVitoria("+ i +")' >Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
    
}

function adicionarVitoria(i){
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    ganhanado(jogadores);
    exibeJogadoresNaTela(jogadores);
    
}

function adicionarEmpate(i){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    ganhanado(jogadores);
    exibeJogadoresNaTela(jogadores);
    
}

function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derotas++;
    exibeJogadoresNaTela(jogadores);
}

exibeJogadoresNaTela(jogadores);
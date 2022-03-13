function adicionarFilme(){
    var campoFilme = document.getElementById("filme").value;
    var camporNomeDoFilme = document.getElementById("nomeFilme").value;
    
    if(campoFilme.endsWith(".jpg") || campoFilme.length >=20 ){
       
        listaFilmesNaTela(campoFilme);
        listaNomes(camporNomeDoFilme);
    }else{
        alert("Erro")
        console.error("Erro");
    }

    // document.getElementById("filme").value = "";
    // document.getElementById("nomeFilme").value = "";
}

function listaFilmesNaTela(campoFilme){
    var elementoFilme = "<img src=" + campoFilme + ">";
    var elementolistaFilmes = document.getElementById("listaFilmes-Capa");
    elementolistaFilmes.innerHTML = elementolistaFilmes.innerHTML + elementoFilme;
}

function listaNomes(campoNome){
    var elementoNomeDoFilme = campoNome;
    var elementoListarNomes = document.getElementById("listaFilmes-Nome")
    elementoListarNomes.innerHTML = elementoListarNomes.innerHTML + elementoNomeDoFilme;
}
function alterarTema(){
    document.body.classList.toggle("dark")
}

const lsitaSelecaoPokemons = document.querySelectorAll('.minimizar');


function mostrar(id){
   
    var paraFechar = document.getElementById("codigo-"+id)

    if(paraFechar.classList.contains('ativo') == true){
        paraFechar.classList.remove('ativo')
        document.getElementById(id).innerHTML = 'Expandir'
    }else{
        paraFechar.classList.add('ativo')
        document.getElementById(id).innerHTML = 'Minimizar'
    }
    

    
}

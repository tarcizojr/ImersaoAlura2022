var listaFilmes = ["Aaa", "Bbb", "Ccc"];

document.write("<p>" + listaFilmes[0] + "</p>");
document.write("<p>" + listaFilmes[1] + "</p>");
document.write("<p>" + listaFilmes[2] + "</p>");

listaFilmes.push("Harry Poter");

document.write("<p>" + listaFilmes[3] + "</p>"); 

for(var i =0; i < listaFilmes.length;i++){
    document.write("<p>" + listaFilmes[i] + "</p>"); 
}
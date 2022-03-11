var listaFilmes = ["https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXN5PCJ/image?locale=pt-br&purposes=BoxArt&mode=scale&q=90&w=162", "https://lumiere-a.akamaihd.net/v1/images/encanto_ka_bpo_pay1_ee2c2e0c.jpeg?region=0,225,1080,1046&width=960"];


for(var i =0;i < listaFilmes.length;i++){
    document.write("<img src=" + listaFilmes[i] + ">")
}
var clientes = [
    {nome:"Frango", gosto:"Bom", Preço:"Acessível"},
    {nome:"Ervilha", gosto:"Lixo", Preço:"Infelizmente Barato"},
    {nome:"Paprika Schnitzel", gosto:"Divino", Preço:"Caro"}
];

function extrair (){
    var htmlresultado = "";
    for (var i = 0; i<clientes.length; i++) {
    htmlresultado += "<tr><td>" + clientes[i].nome + "</td><td>" + clientes[i].gosto + "</td><td>" + clientes[i].Preço + "</td></tr>"
    }
    return htmlresultado;
}

document.getElementById("Tabelin").innerHTML = extrair();
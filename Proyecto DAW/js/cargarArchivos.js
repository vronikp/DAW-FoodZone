var listRestaurante;

function inicializar(){
    obtenerRestaurante();
}

function obtenerRestaurante(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', mostrarRestaurante, false);
    request.open("GET", "xml/Restaurante.xml", true);

    request.send();
}

function mostrarRestaurante(e){
    alert(e.target.responseText);
    var xml = e.target.responseXML;
    listRestaurante = xml.getElementsByTagName("restaurantes")[0].getElementsByTagName("restaurante");
    nombreL1.innerHTML = listRestaurante[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
    resenaL1.innerHTML = listRestaurante[0].getElementsByTagName("resena")[0].firstChild.nodeValue;
    nombreL2.innerHTML = listRestaurante[1].getElementsByTagName("nombre")[0].firstChild.nodeValue;
    resenaL2.innerHTML = listRestaurante[1].getElementsByTagName("resena")[0].firstChild.nodeValue;
    nombreL3.innerHTML = listRestaurante[2].getElementsByTagName("nombre")[0].firstChild.nodeValue;
    resenaL3.innerHTML = listRestaurante[2].getElementsByTagName("resena")[0].firstChild.nodeValue;
}

window.addEventListener('load', inicializar, false);
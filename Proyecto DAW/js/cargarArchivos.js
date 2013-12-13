var listRestaurante;

function inicializar(){
    obtenerRestaurante();
    btnIniciarSesion.addEventListener('click', iniciarSesion, false);
    obtenerZona();
    obtenerTipo();
}

function obtenerZona(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', mostrarZona,false);
    request.open("GET","xml/Zona.xml");
    request.send();
}

function mostrarZona(e){
    xmlZona = e.target.responseXML;
    listaZona = xmlZona.getElementsByTagName("zonas")[0].getElementsByTagName("zona");
    selectZona.options[0] = new Option("Tu ubicación", 0);
    for (i=0; i< listaZona.length;i++){
        var id =listaZona[i].getElementsByTagName("id");
        var nombre = listaZona[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        //Agregar a lista para busqueda
        selectZona.options[i + 1] = new Option(nombre, id);
    }
}

function obtenerTipo(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', mostrarTipo,false);
    request.open("GET","xml/TipoLocal.xml");
    request.send();
}

function mostrarTipo(e){
    xmlTipo = e.target.responseXML;
    listaTipo = xmlTipo.getElementsByTagName("tiposLocal")[0].getElementsByTagName("tipoLocal");
    selectTipo.options[0] = new Option("Todos", 0);
    for (i=0; i< listaTipo.length;i++){
        var id =listaTipo[i].getElementsByTagName("id");
        var nombre = listaTipo[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        //Agregar a lista para busqueda
        selectTipo.options[i + 1] = new Option(nombre, id);
    }
}
function obtenerRestaurante(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', mostrarRestaurante, false);
    request.open("GET", "xml/Restaurante.xml", true);

    request.send();
}

function mostrarRestaurante(e){
    var xml = e.target.responseXML;
    listRestaurante = xml.getElementsByTagName("restaurantes")[0].getElementsByTagName("restaurante");
    nombreL1.innerHTML = listRestaurante[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
    resenaL1.innerHTML = listRestaurante[0].getElementsByTagName("resena")[0].firstChild.nodeValue;
    nombreL2.innerHTML = listRestaurante[1].getElementsByTagName("nombre")[0].firstChild.nodeValue;
    resenaL2.innerHTML = listRestaurante[1].getElementsByTagName("resena")[0].firstChild.nodeValue;
    nombreL3.innerHTML = listRestaurante[2].getElementsByTagName("nombre")[0].firstChild.nodeValue;
    resenaL3.innerHTML = listRestaurante[2].getElementsByTagName("resena")[0].firstChild.nodeValue;
}

function iniciarSesion(){
    
}

window.addEventListener('load', inicializar, false);
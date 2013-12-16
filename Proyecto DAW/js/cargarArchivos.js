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
    listaLocales = xml.getElementsByTagName("restaurantes")[0].getElementsByTagName("restaurante");
    if(listaLocales.length>0){
        div = document.createElement('div');
        div.className = "top3Local";

        h3 = document.createElement('h3');
        h3.className = "nombreLocalT3";
        h3.innerHTML = listaLocales[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;

        fig = document.createElement('figure');
        fig.className = "figLocalT3";
        img = document.createElement('img');
        img.src="imagen/"+listaLocales[0].getElementsByTagName("nombre")[0].firstChild.nodeValue+"-principal.png";
        img.alt=listaLocales[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        img.width = 100;
        img.height = 100;
        //figcap = document.createElement('figcaption');
        //figcap.innerHTML=listaLocales[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        fig.appendChild(img);

        p = document.createElement('p');
        p.className = "pLocalT3";
        p.innerHTML = listaLocales[0].getElementsByTagName("resena")[0].firstChild.nodeValue;

        div.appendChild(h3);
        div.appendChild(fig);
        div.appendChild(p);

        contenidoTop3.appendChild(div);
    }
    if (listaLocales.length > 1) {
        div = document.createElement('div');
        div.className = "top3Local";

        h3 = document.createElement('h3');
        h3.className = "nombreLocalT3";
        h3.innerHTML = listaLocales[1].getElementsByTagName("nombre")[0].firstChild.nodeValue;

        fig = document.createElement('figure');
        fig.className = "figLocalT3";
        img = document.createElement('img');
        img.src="imagen/"+listaLocales[1].getElementsByTagName("nombre")[0].firstChild.nodeValue+"-principal.png";
        img.alt=listaLocales[1].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        img.width = 100;
        img.height = 100;
        //figcap = document.createElement('figcaption');
        //figcap.innerHTML=listaLocales[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        fig.appendChild(img);

        p = document.createElement('p');
        p.className = "pLocalT3";
        p.innerHTML = listaLocales[1].getElementsByTagName("resena")[0].firstChild.nodeValue;

        div.appendChild(h3);
        div.appendChild(fig);
        div.appendChild(p);

        contenidoTop3.appendChild(div);
    }
    if (listaLocales.length > 2) {
        div = document.createElement('div');
        div.className = "top3Local";

        h3 = document.createElement('h3');
        h3.className = "nombreLocalT3";
        h3.innerHTML = listaLocales[2].getElementsByTagName("nombre")[0].firstChild.nodeValue;

        fig = document.createElement('figure');
        fig.className = "figLocalT3";
        img = document.createElement('img');
        img.src="imagen/"+listaLocales[2].getElementsByTagName("nombre")[0].firstChild.nodeValue+"-principal.png";
        img.alt=listaLocales[2].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        img.width = 100;
        img.height = 100;
        //figcap = document.createElement('figcaption');
        //figcap.innerHTML=listaLocales[2].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        fig.appendChild(img);

        p = document.createElement('p');
        p.className = "pLocalT3";
        p.innerHTML = listaLocales[2].getElementsByTagName("resena")[0].firstChild.nodeValue;

        div.appendChild(h3);
        div.appendChild(fig);
        div.appendChild(p);

        contenidoTop3.appendChild(div);
    }
}

function iniciarSesion(){
    
}

window.addEventListener('load', inicializar, false);
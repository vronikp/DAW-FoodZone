var nombreSeleccion;
var idSeleccion;
var listaPlatos;

function init(){
    listaPlatos = new Array();
    paresParametros = leerGET();
    nombreSeleccion = paresParametros["n"];
    nombreLocal.innerHTML = nombreSeleccion;

    getLocal();
}

function getLocal(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', showLocal,false);
    request.open("GET","xml/Restaurante.xml");
    request.send();
}

function showLocal(e){
    xmlTipo = e.target.responseXML;
    listaLocal = xmlTipo.getElementsByTagName("restaurantes")[0].getElementsByTagName("restaurante");
    for (i=0; i< listaLocal.length;i++){
        var id =listaLocal[i].getElementsByTagName("id")[0].firstChild.nodeValue;
        var nombre = listaLocal[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;

        if (nombre == nombreSeleccion) {
            idSeleccion = id;
            resena.innerHTML = listaLocal[i].getElementsByTagName("resena")[0].firstChild.nodeValue;
            horarioAtencion.innerHTML = listaLocal[i].getElementsByTagName("resena")[0].firstChild.nodeValue;
        }
    }
    getPlatos();
}

function getPlatos(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', showPlatos,false);
    request.open("GET","xml/platos.xml");
    request.send();
}

function showPlatos(e){
    xml = e.target.responseXML;
    listaPlatosXml = xml.getElementsByTagName("platos")[0].getElementsByTagName("plato");
    for (i=0; i< listaPlatosXml.length;i++){
        var idLocal =listaPlatosXml[i].getElementsByTagName("idLocal")[0].firstChild.nodeValue;

        if (idSeleccion==idLocal){
            id =listaPlatosXml[i].getElementsByTagName("id")[0].firstChild.nodeValue;
            nombre =listaPlatosXml[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
            listaPlatos.push(listaPlatosXml[i]);
            
            li = document.createElement('li');
            li.innerHTML = nombre;
            li.name = id;
            li.addEventListener('click', function () {
                mostrarPlato(this.name);
            }, false);
            
            ulPlatos.appendChild(li);
        }
        
    }
    cargarTop3();
}

function mostrarPlato(idPlato){
    plato.style.display = 'block';
    for (i=0; i< listaPlatos.length;i++){
        id =listaPlatos[i].getElementsByTagName("id")[0].firstChild.nodeValue;

        if (idPlato==id){
            nombrePlato.innerHTML =listaPlatos[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;

            imgPlato.src=listaPlatos[i].getElementsByTagName("foto")[0].firstChild.nodeValue;
            imgPlato.alt=nombrePlato;
            imgPlato.width = 100;
            imgPlato.height = 100;
            //figcap.innerHTML=listaPlatos[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;

            descripcionPlato.innerHTML =listaPlatos[i].getElementsByTagName("descripcion")[0].firstChild.nodeValue;

        }
        
    }
}

function cargarTop3(){
    if(listaPlatos.length>0){
        div = document.createElement('div');
        div.className = "top3Local";

        h3 = document.createElement('h3');
        h3.className = "nombreLocalT3";
        h3.innerHTML = listaPlatos[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        h3.name = listaPlatos[0].getElementsByTagName("id")[0].firstChild.nodeValue;
        h3.addEventListener('click', function () {
                mostrarPlato(this.name);
        }, false);

        fig = document.createElement('figure');
        fig.className = "figLocalT3";
        img = document.createElement('img');
        img.src="imagen/"+listaPlatos[0].getElementsByTagName("nombre")[0].firstChild.nodeValue+"-principal.png";
        img.alt=listaPlatos[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        img.width = 100;
        img.height = 100;
        //figcap = document.createElement('figcaption');
        //figcap.innerHTML=listaPlatos[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        fig.appendChild(img);

        p = document.createElement('p');
        p.className = "pLocalT3";
        p.innerHTML = listaPlatos[0].getElementsByTagName("descripcion")[0].firstChild.nodeValue;

        div.appendChild(h3);
        div.appendChild(fig);
        div.appendChild(p);

        contenidoTop3.appendChild(div);
    }
    if (listaPlatos.length > 1) {
        div = document.createElement('div');
        div.className = "top3Local";

        h3 = document.createElement('h3');
        h3.className = "nombreLocalT3";
        h3.innerHTML = listaPlatos[1].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        h3.name = listaPlatos[1].getElementsByTagName("id")[0].firstChild.nodeValue;
        h3.addEventListener('click', function () {
                mostrarPlato(this.name);
        }, false);

        fig = document.createElement('figure');
        fig.className = "figLocalT3";
        img = document.createElement('img');
        img.src="imagen/"+listaPlatos[1].getElementsByTagName("nombre")[0].firstChild.nodeValue+"-principal.png";
        img.alt=listaPlatos[1].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        img.width = 100;
        img.height = 100;
        //figcap = document.createElement('figcaption');
        //figcap.innerHTML=listaPlatos[0].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        fig.appendChild(img);

        p = document.createElement('p');
        p.className = "pLocalT3";
        p.innerHTML = listaPlatos[1].getElementsByTagName("descripcion")[0].firstChild.nodeValue;

        div.appendChild(h3);
        div.appendChild(fig);
        div.appendChild(p);

        contenidoTop3.appendChild(div);
    }
    if (listaPlatos.length > 2) {
        div = document.createElement('div');
        div.className = "top3Local";

        h3 = document.createElement('h3');
        h3.className = "nombreLocalT3";
        h3.innerHTML = listaPlatos[2].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        h3.name = listaPlatos[2].getElementsByTagName("id")[0].firstChild.nodeValue;
        h3.addEventListener('click', function () {
                mostrarPlato(this.name);
        }, false);

        fig = document.createElement('figure');
        fig.className = "figLocalT3";
        img = document.createElement('img');
        img.src="imagen/"+listaPlatos[2].getElementsByTagName("nombre")[0].firstChild.nodeValue+"-principal.png";
        img.alt=listaPlatos[2].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        img.width = 100;
        img.height = 100;
        //figcap = document.createElement('figcaption');
        //figcap.innerHTML=listaPlatos[2].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        fig.appendChild(img);

        p = document.createElement('p');
        p.className = "pLocalT3";
        p.innerHTML = listaPlatos[2].getElementsByTagName("descripcion")[0].firstChild.nodeValue;

        div.appendChild(h3);
        div.appendChild(fig);
        div.appendChild(p);

        contenidoTop3.appendChild(div);
    }
}

function leerGET(){
  var cadGET = location.search.substr(1,location.search.length);
  var arrGET = cadGET.split("&");
  var asocGET = new Array();
  var variable = "";
  var valor = "";
  for(i=0;i<arrGET.length;i++){
    var aux = arrGET[i].split("=");
    variable = aux[0];
    valor = aux[1];
    asocGET[variable] = valor;
  }
  return asocGET;
}

window.addEventListener('load', init, false);
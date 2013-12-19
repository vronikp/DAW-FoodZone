var tipoSeleccion;
var nombreSeleccion;
var idSeleccion;
var listaLocales;

function init(){
    //while (listaLocales.firstChild) listaLocales.removeChild(listaLocales.firstChild);
    listaLocales = new Array();
    paresParametros = leerGET();
    tituloBusqueda.innerHTML = paresParametros["t"] +" - "+paresParametros["n"];
    tipoSeleccion = paresParametros["t"];
    nombreSeleccion = paresParametros["n"];

    /*for (obj in paresVarValor){
        document.write("'"+obj+"''vale<b>"+paresVarValor[obj]+"</b><br>");
    } */
    
    if (paresParametros["t"]=="Zona"){
        getZoneAside();
    }else if(paresParametros["t"]=="Tipo"){
        getTypeAside();
    }
}


function getZoneAside(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', showZoneAside,false);
    request.open("GET","xml/Zona.xml");
    request.send();
}

function showZoneAside(e){
    xmlZona = e.target.responseXML;
    listaZona = xmlZona.getElementsByTagName("zonas")[0].getElementsByTagName("zona");
    for (i=0; i< listaZona.length;i++){
        var id =listaZona[i].getElementsByTagName("id")[0].firstChild.nodeValue;
        var nombre = listaZona[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        //idParaCargarLocales = id;
        li = document.createElement('li');
        li.className = "listaOpciones";
        a = document.createElement('a');
        a.innerHTML = nombre;
        a.name = id;
        a.href = "locales.html?t=Zona&n="+nombre;
        ul = document.createElement('ul');
        ul.id = id;
        ul.className = "listaLocales";
        //getLocales();
        li.appendChild(a);
        li.appendChild(ul);
        listaTipoZona.appendChild(li);
        if(nombreSeleccion==nombre){
            idSeleccion = id;
        }
    }
    getLocalesAside();
}

function getTypeAside(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', showTypeAside,false);
    request.open("GET","xml/TipoLocal.xml");
    request.send();
}

function showTypeAside(e){
    xmlTipo = e.target.responseXML;
    listaTipo = xmlTipo.getElementsByTagName("tiposLocal")[0].getElementsByTagName("tipoLocal");
    for (i=0; i< listaTipo.length;i++){
        var id =listaTipo[i].getElementsByTagName("id")[0].firstChild.nodeValue;
        var nombre = listaTipo[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        li = document.createElement('li');
        li.className = "listaOpciones";
        a = document.createElement('a');
        a.innerHTML = nombre;
        a.name = id;
        a.href = "locales.html?t=Tipo&n="+nombre;
        ul = document.createElement('ul');
        ul.id = id;
        ul.className = "listaLocales";
        //getLocales();
        li.appendChild(a);
        li.appendChild(ul);
        listaTipoZona.appendChild(li);
        if(nombreSeleccion==nombre){
            idSeleccion = id;
        }
    }
    getLocalesAside();
}

function getLocalesAside(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', showLocalesAside,false);
    request.open("GET","xml/Restaurante.xml");
    request.send();
}

function showLocalesAside(e){
    xmlTipo = e.target.responseXML;
    listaLocal = xmlTipo.getElementsByTagName("restaurantes")[0].getElementsByTagName("restaurante");
    //liTipoZona = listaTipoZona.getElementsByClassName("listaOpciones");
    liTipoZona = listaTipoZona.children;
    for(j=0; j<liTipoZona.length; j++){
        ulActual = liTipoZona[j].getElementsByTagName("ul")[0];
        aName = ulActual.id;
        for (i=0; i< listaLocal.length;i++){
            var id =listaLocal[i].getElementsByTagName("id")[0].firstChild.nodeValue;
            var nombre = listaLocal[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;

            if (tipoSeleccion=="Zona"){
                var idZona =listaLocal[i].getElementsByTagName("idZona")[0].firstChild.nodeValue;
                if (idZona==aName){
                    li = document.createElement('li');
                    a = document.createElement('a');
                    a.innerHTML = nombre;
                    a.name = id;
                    a.href = "local.html?n="+nombre;
                    li.appendChild(a);
                    ulActual.appendChild(li);
                    if(idSeleccion==idZona){
                        listaLocales.push(listaLocal[i]);
                    }
                }
            }else if(tipoSeleccion=="Tipo"){
                var idZona =listaLocal[i].getElementsByTagName("idTipo")[0].firstChild.nodeValue;
                if (idZona==aName){
                    li = document.createElement('li');
                    a = document.createElement('a');
                    a.innerHTML = nombre;
                    a.name = id;
                    a.href = "local.html?n="+nombre;
                    li.appendChild(a);
                    ulActual.appendChild(li);
                    if(idSeleccion==idZona){
                        listaLocales.push(listaLocal[i]);
                    }
                }
            }
        }
    }
    cargarTop3();
}

function cargarTop3(){
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

window.addEventListener('load', init, false) 
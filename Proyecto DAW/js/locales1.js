var tipoSeleccion;
var nombreSeleccion;

function init(){
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
        li.class = "listaOpciones";
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
        li.class = "listaOpciones";
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
                }
            }
        }
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
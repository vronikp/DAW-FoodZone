function init(){
    InicioSesion.addEventListener('click', showLoginForm, false);
    getZone();
    getType();
}

function showLoginForm(){
    if(divLogin.style.display=='none' || divLogin.style.display==''){
        divLogin.style.display = 'block';
    }else{
    divLogin.style.display = 'none';
    }
}

function getZone(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', showZone,false);
    request.open("GET","xml/Zona.xml");
    request.send();
}

function showZone(e){
    xmlZona = e.target.responseXML;
    listaZona = xmlZona.getElementsByTagName("zonas")[0].getElementsByTagName("zona");
   // selectZona.options[0] = new Option("Tu ubicación", 0);
    for (i=0; i< listaZona.length;i++){
        var id =listaZona[i].getElementsByTagName("id");
        var nombre = listaZona[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
        li = document.createElement('li');
        a = document.createElement('a');
        a.innerHTML = nombre;
        a.name = id;
        a.href = "locales.html?t=Zona&n="+nombre;
        li.appendChild(a);
        listaLocalZona.appendChild(li);
    }
}

function getType(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', showType,false);
    request.open("GET","xml/TipoLocal.xml");
    request.send();
}

function showType(e){
    xmlTipo = e.target.responseXML;
    listaTipo = xmlTipo.getElementsByTagName("tiposLocal")[0].getElementsByTagName("tipoLocal");
    //selectTipo.options[0] = new Option("Todos", 0);
    for (i=0; i< listaTipo.length;i++){
        var id =listaTipo[i].getElementsByTagName("id");
        var nombre = listaTipo[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;

        //Agregar a navigation bar
        li = document.createElement('li');
        a = document.createElement('a');
        a.innerHTML = nombre;
        a.name = id;
        a.href = "locales.html?t=Tipo&n="+nombre;
        li.appendChild(a);
        listaLocalTipo.appendChild(li);
    }
}

function iniciarSesion(){
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', verificarUsuario, false);
    request.open("GET", "xml/Usuarios.xml", true); //deberia hacerse con POST
    request.send();
}

function verificarUsuario(e){
    xmlUsuarios = e.target.responseXML;
    listaUsuarios = xmlUsuarios.getElementsByTagName("usuarios")[0].getElementsByTagName("usuario");

    for (i=0; i<listaUsuarios.length;i++){
        if(listaUsuarios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue==document.getElementsByName("txtUsuario")[0].value){
            if(listaUsuarios[i].getElementsByTagName("activo")[0].firstChild.nodeValue=="true"){
                if (listaUsuarios[i].getElementsByTagName("clave")[0].firstChild.nodeValue == document.getElementsByName("txtPassword")[0].value) {
                    alert("Bienvenido, "+ listaUsuarios[i].getElementsByTagName("nombre")[0].firstChild.nodeValue);
                    document.getElementById("login").style.display = 'none';
                    document.getElementsByClassName("usuario")[0].style.display = 'block';
                    document.getElementsByClassName("usuario")[1].style.display = 'block';
                }else{
                alert("Contrasena incorrecta");
                }
            }else{
            alert("El usuario no se encuentra activo. Favor contactar con el Administrador.");
            }
            return;
        }
    }
    alert("No existe el usuario");
}


window.addEventListener('load', init, false);
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

        //Agregar a navigation bar
        li = document.createElement('li');
        a = document.createElement('a');
        a.innerHTML = nombre;
        a.name = id;
        a.href = "#";
        li.appendChild(a);
        listaLocalZona.appendChild(li);

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

        //Agregar a navigation bar
        li = document.createElement('li');
        a = document.createElement('a');
        a.innerHTML = nombre;
        a.name = id;
        a.href = "#";
        li.appendChild(a);
        listaLocalTipo.appendChild(li);

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


window.addEventListener('load', inicializar, false);
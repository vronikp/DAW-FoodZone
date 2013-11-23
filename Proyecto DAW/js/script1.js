function inicializar(){
	get_platos();
}

function get_platos(){
	
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', show_platos, false);
    request.open("GET", "platos.xml", true);
    request.send();
}

function show_platos(e){
	var xml = e.target.responseXML;
	ls_platos = xml.getElementsByTagName("platos")[0].getElementsByTagName("plato");
	alert(ls_platos.length);
	for (i = 0; i < ls_platos.length; i++)
	{
		var p, div, ul,li;
		
		div = document.createElement('div');
		ul = document.createElement('ul');
		li1 = document.createElement('li');
		li2 = document.createElement('li');
		li1.innerHTML = ls_platos[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
		ul.appendChild(li1);
		li2.innerHTML = ls_platos[i].getElementsByTagName("puntuacion")[0].firstChild.nodeValue;
		ul.appendChild(li2);
		div.appendChild(ul)
		
		document.getElementById("platos").appendChild(div);
		
	}
}


window.addEventListener('load', inicializar, false);
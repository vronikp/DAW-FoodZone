function get_zona(){
		
    var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', show_zona, false);
    request.open("GET", "xml/zona.xml", false);
    request.send();
}

function init(){
	get_zona();
	create_map();

}

function create_map(){
	var mapProp = {
		center:new google.maps.LatLng(-2.14555,-79.96642),
		zoom:17,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var div = document.createElement('div');
	div.id = 'mapa';
	var map =new google.maps.Map(div,mapProp);
	document.getElementById("contenido").appendChild(div);	
}

function add_markers(){
	var map = document.getElementById("mapa");
	alert(typeof(map));
	var request = new XMLHttpRequest();
	var docXML;
					
	request.open("GET","xml/Restaurante.xml",true);						
	request.send(null);

	docXML =request.responseXML;
	ls = docXML.getElementsByTagName("restaurantes")[0].getElementsByTagName("restaurante");
	for(i = 0; i < ls.length;i++){
		var nombre = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
		var direccion = ls[i].getElementsByTagName("direccion")[0].firstChild.nodeValue;
		var punt = ls[i].getElementsByTagName("puntuacion")[0].firstChild.nodeValue;
		var lat = ls[i].getElementsByTagName("latitud")[0].firstChild.nodeValue;
		var lng = ls[i].getElementsByTagName("longitud")[0].firstChild.nodeValue;				
		var coord = new google.maps.LatLng(lat,lng);
		var marker = new google.maps.Marker({ position: coord, title: nombre});
		marker.setMap(map);
		var content = '<div id = "infoWindow"> <h5> Nombre del Restaurante: </h5>' + nombre + '<br> <h5> Direcci&oacute;n: </h5>' + 
					direccion + '<br> <h5> Calificaci&oacute;n:</h5>' + punt + '</div>';
		var infowindow = new google.maps.InfoWindow({content: content});
		google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});
	}
}

function show_zona(e)
{
	var xml = e.target.responseXML;
	
	var select = document.getElementById("selectZona");
	var ls;
	ls= xml.getElementsByTagName("zonas")[0].getElementsByTagName("zona");
	for(i =0; i < ls.length; i++)
	{
		var option = document.createElement	('option');
		
		text = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
		value = ls[i].getElementsByTagName("id")[0].firstChild.nodeValue;
		option.text = text;
		option.value = value;
		select.add(option,0);
	}
}

function heil(param){
	alert(param);
}


window.addEventListener('load', init, false);
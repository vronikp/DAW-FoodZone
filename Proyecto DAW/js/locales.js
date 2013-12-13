var map; //mapa global
var markers = []; //añade markers
var lsContent = [];

function init(){
	get_zona();
	get_tipo();
	initialize();
}

function get_zona(){       
	var request;
    request = new XMLHttpRequest();
    request.addEventListener('load', show_zona, false);
    request.open("GET", "xml/zona.xml", false);
    request.send();
}

function show_zona(e){
	var xml = e.target.responseXML;
           
	var select = document.getElementById("selectZona");
	var ls;
	ls = xml.getElementsByTagName("zonas")[0].getElementsByTagName("zona");
	for(i =0; i < ls.length; i++){
		var option = document.createElement('option');
                   
		text = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
		value = ls[i].getElementsByTagName("id")[0].firstChild.nodeValue;
		option.text = text;
		option.value = value;
		select.add(option,0);
	}
}

function get_tipo(){
	var request;
	request = new XMLHttpRequest();
	request.addEventListener('load',show_tipo,false)
	request.open("GET","xml/TipoLocal.xml",false);
	request.send();
}

function show_tipo(e){
	var xml = e.target.responseXML;
	var select = document.getElementById("selectTipo");
	var ls;
	ls = xml.getElementsByTagName("tiposLocal")[0].getElementsByTagName("tipoLocal");
	for(i = 0; i < ls.length; i++){
		var option = document.createElement('option');
		
		text = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
		value = ls[i].getElementsByTagName("id")[0].firstChild.nodeValue;
		option.text = text;
		option.value = value;
		select.add(option,0);
	}
}

function initialize(){
	//Crea las opciones del mapa
	var mapProp = {
		center:new google.maps.LatLng(-2.14555,-79.96642),
		zoom:17,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};	
	
	var div = document.createElement('div');
	div.id = 'mapa';	
	
	map =new google.maps.Map(div,mapProp);
	document.getElementById("contenido").appendChild(div);
	deleteMarkers();
	buildAll();
	showMarkers();
}

function buildByZona(idZona){
	clearInfoWindow();
	ls = ls_rest();
	for(i = 0; i < ls.length; i++){
		var zona = ls[i].getElementsByTagName("idZona")[0].firstChild.nodeValue;
		if(zona == idZona){
			var nombre = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
			var lat = ls[i].getElementsByTagName("latitud")[0].firstChild.nodeValue;
			var lng = ls[i].getElementsByTagName("longitud")[0].firstChild.nodeValue;
			var direccion = ls[i].getElementsByTagName("direccion")[0].firstChild.nodeValue;
			var punt = ls[i].getElementsByTagName("puntuacion")[0].firstChild.nodeValue;
			var coord = new google.maps.LatLng(lat,lng);
			var marker = new google.maps.Marker({ position: coord, title: nombre});
			var content = '<div id = "infoWindow"> <h5> Nombre del Restaurante: </h5>' + nombre + 
						'<br> <h5> Direcci&oacute;n: </h5>' + direccion + '<br> <h5> Calificaci&oacute;n:</h5>' + 
						punt + '</div>';
			lsContent.push(content);
			markers.push(marker);			
		}
	}
}

function buildByTipo(idTipo){
	clearInfoWindow();
	ls = ls_rest();
	for(i = 0; i < ls.length; i++){
		var tipo = ls[i].getElementsByTagName("idTipo")[0].firstChild.nodeValue;
		if(tipo == idTipo){
			var nombre = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
			var lat = ls[i].getElementsByTagName("latitud")[0].firstChild.nodeValue;
			var lng = ls[i].getElementsByTagName("longitud")[0].firstChild.nodeValue;
			var direccion = ls[i].getElementsByTagName("direccion")[0].firstChild.nodeValue;
			var punt = ls[i].getElementsByTagName("puntuacion")[0].firstChild.nodeValue;
			var coord = new google.maps.LatLng(lat,lng);
			var marker = new google.maps.Marker({ position: coord, title: nombre});
			var content = '<div id = "infoWindow"> <h5> Nombre del Restaurante: </h5>' + nombre + 
						'<br> <h5> Direcci&oacute;n: </h5>' + direccion + '<br> <h5> Calificaci&oacute;n:</h5>' + 
						punt + '</div>';
			lsContent.push(content);
			markers.push(marker);			
		}
	}
}

function buildByTipoZona(idTipo, idZona){
	clearInfoWindow();
	ls = ls_rest();
	for(i = 0; i < ls.length; i++){
		var zona = ls[i].getElementsByTagName("idZona")[0].firstChild.nodeValue;
		var tipo = ls[i].getElementsByTagName("idZona")[0].firstChild.nodeValue;
		if(zona == idZona && tipo == idTipo ){
			var nombre = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
			var lat = ls[i].getElementsByTagName("latitud")[0].firstChild.nodeValue;
			var lng = ls[i].getElementsByTagName("longitud")[0].firstChild.nodeValue;
			var direccion = ls[i].getElementsByTagName("direccion")[0].firstChild.nodeValue;
			var punt = ls[i].getElementsByTagName("puntuacion")[0].firstChild.nodeValue;
			var coord = new google.maps.LatLng(lat,lng);
			var marker = new google.maps.Marker({ position: coord, title: nombre});
			var content = '<div id = "infoWindow"> <h5> Nombre del Restaurante: </h5>' + nombre + 
						'<br> <h5> Direcci&oacute;n: </h5>' + direccion + '<br> <h5> Calificaci&oacute;n:</h5>' + 
						punt + '</div>';
			lsContent.push(content);
			markers.push(marker);			
		}
	}
}

function buildAll(){
	ls = ls_rest();
	for(i = 0; i < ls.length; i++){
		var nombre = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
		var lat = ls[i].getElementsByTagName("latitud")[0].firstChild.nodeValue;
        var lng = ls[i].getElementsByTagName("longitud")[0].firstChild.nodeValue;  
        var direccion = ls[i].getElementsByTagName("direccion")[0].firstChild.nodeValue;
        var punt = ls[i].getElementsByTagName("puntuacion")[0].firstChild.nodeValue;    
		var coord = new google.maps.LatLng(lat,lng);
		var marker = new google.maps.Marker({ position: coord, title: nombre});	
		var content = '<div id = "infoWindow"> <h5> Nombre del Restaurante: </h5>' + nombre + 
					'<br> <h5> Direcci&oacute;n: </h5>' +  direccion + '<br> <h5> Calificaci&oacute;n:</h5>' + punt + '						<div>';
        lsContent.push(content);
		markers.push(marker);
	}
}

function setAllMap(map){
	for(i = 0; i< markers.length; i++){
		markers[i].setMap(map);
	}
}

function showMarkers(){
	setAllMap(map)
}

function clearMarkers(){
	setAllMap(null);
}
     
function deleteMarkers(){
	clearMarkers();
	markers = [];
}

function clearInfoWindow(){
	infowindow = [];
	deleteMarkers();
}
     
function ls_rest(){
	//retorna una lista con todos los restaurantes
	var request = new XMLHttpRequest();
	request.open("GET","xml/Restaurante.xml",false);                                               
	request.send(null);
	docXML = request.responseXML;
	return docXML.getElementsByTagName("restaurantes")[0].getElementsByTagName("restaurante");
}

function markersByZona(){
	deleteMarkers();	
	var select = document.getElementById("selectZona");
	var value = select.options[select.selectedIndex].value;
	buildMarkersByZona(value);
	showMarkers();
}

function markersByTipo(){
	deleteMarkers();
	var select = document.getElementById();
	var value = select.options[select.selectedIndex].value;
	buildMarkersByTipo(value);
	showMarkers()
}

function build(){

	var sZona = document.getElementById('selectZona');
	var vZona = sZona.options[sZona.selectedIndex].value;
	var sTipo = document.getElementById('selectTipo');
	var vTipo = sTipo.options[sTipo.selectedIndex].value;
	
}
  
window.addEventListener('load', init, false);
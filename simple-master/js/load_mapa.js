function initialize(){
	var mapProp = {
		center:new google.maps.LatLng(-2.14555,-79.96642),
		zoom:17,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map=new google.maps.Map(document.getElementById("contenido"),mapProp);
		
	var request;
	var docXML;
		
	request = new XMLHttpRequest();
	request.open("GET","xml/Restaurante.xml",true);						
	request.send();
	alert(request.readyState);
	docXML =request.responseXML;
	ls = docXML.getElementsByTagName("restaurantes")[0].getElementsByTagName("restaurante");
	for(i = 0; i < ls.length;i++){
		var nombre = ls[i].getElementsByTagName("nombre")[0].firstChild.nodeValue;
		var direccion = ls[i].getElementsByTagName("direccion")[0].firstChild.nodeValue;
		var lat = ls[i].getElementsByTagName("latitud")[0].firstChild.nodeValue;
		var lng = ls[i].getElementsByTagName("longitud")[0].firstChild.nodeValue;				
		var coord = new google.maps.LatLng(lat,lng);
		var marker = new google.maps.Marker({ position: coord, title: nombre});
			marker.setMap(map);
		var content = '<div id = "infoWindow"> <h5> Nombre del Restaurante: </h5>' + nombre + '<br> <h5> Direcci&oacute;n </h5>' + 
						direccion + '</div>';
		var infowindow = new google.maps.InfoWindow({content: content});
			google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker);});
				
	}
}

window.addEventListener('load',initialize,false);
openxava.addEditorInitFunction(function() {
	inicializacion();
});

function inicializacion() {
	
	var latitud = 18.48;
	var longitud = -69.90;
	
	//Creo un nuevo mapa situado en Santo Domingo, Republica Dominicana
    var options = {
        zoom: 12
        , center: new google.maps.LatLng(latitud, longitud)
        , mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapa = new google.maps.Map(document.getElementById("mapa"), options);

    //Creo un marcador para capturar la posicion indicada por el usuario
    var marcador = new google.maps.Marker({
    	position: new google.maps.LatLng(latitud, longitud), 
    	map: mapa, 
    	animation: google.maps.Animation.DROP,
    	draggable: true,
    	title:"Direccion"});
    
    //Creo un evento asociado a "mapa" cuando se hace "click" sobre el
    google.maps.event.addListener(mapa, "click", function(evento) {
        //Obtengo las coordenadas separadas
        latitud = evento.latLng.lat();
        longitud = evento.latLng.lng();
            
        //Creo un marcador utilizando las coordenadas obtenidas y almacenadas por separado en "latitud" y "longitud"
        var coordenadas = new google.maps.LatLng(latitud, longitud); /* Debo crear un punto geografico utilizando google.maps.LatLng */
        
        //Reubico el marcador a la nueva posicion indicada por el usuario
        marcador.setPosition(coordenadas);
    }); //Fin del evento
}

document.write("<script language=\"JavaScript\" type=\"text/JavaScript\" src=\"http://maps.google.com/maps/api/js?sensor=false&amp;language=es\"></script"+">");


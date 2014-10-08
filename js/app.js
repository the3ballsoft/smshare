var eleOpcionesLugares = document.getElementById('opcionesLugares');
var btnActividades = document.getElementById("opt_actividades");
var btnTipoLugar = document.getElementById("opt_tipolugar");


function cargarOptActividades(){
	 var xhReq = new XMLHttpRequest();
	 xhReq.open("GET", "html/actividades_menu.html", false);
	 xhReq.send(null);
	 var respuesta = xhReq.responseText;
	 eleOpcionesLugares.innerHTML = respuesta;
}
function cargarOptTipolugar(){
	 var xhReq = new XMLHttpRequest();
	 xhReq.open("GET", "html/tipolugares_menu.html", false);
	 xhReq.send(null);
	 var respuesta = xhReq.responseText;
	 eleOpcionesLugares.innerHTML = respuesta;
}

var app = {
	init: function(){
		 cargarOptActividades();
		 $('.btn').click(function() {
		 	if( ($(this))[0].childNodes[1] == btnActividades ){
		 		cargarOptActividades();
		 	}
		 	if( ($(this))[0].childNodes[1] == btnTipoLugar ){
		 		cargarOptTipolugar();
		 	}
	   	 });
	},
};


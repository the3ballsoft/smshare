var eleOpcionesLugares = document.getElementById('opcionesLugares');

var app = {
	init: function(){
		 cargarOptActividades();
	},
};

function cargarOptActividades(){
	 var xhReq = new XMLHttpRequest();
	 xhReq.open("GET", "html/actividades_menu.html", false);
	 xhReq.send(null);
	 var respuesta = xhReq.responseText;
	 eleOpcionesLugares.innerHTML = respuesta;
}
function cargarOptTipolugar(){
	 var xhReq = new XMLHttpRequest();
	 xhReq.open("GET", "html/tipolugares.html", false);
	 xhReq.send(null);
	 var respuesta = xhReq.responseText;
	 eleOpcionesLugares.innerHTML = respuesta;
}
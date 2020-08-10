/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {

	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let contadorSalta = 0;
	let elmaselegido;
	let banderaTitular = 0;
	let mayorcantidad;
	let sexotitular;
	let promedio;
	let acumuladorInvierno = 0;
	let contadorInvierno = 0;

	do {
		sexo = prompt("ingrese sexo (f o m)");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Error.Ingrese sexo");
		}
		lugar = prompt('ingrese lugar:“bariloche”, “cataratas” o “salta”)');
		while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta")) {
			lugar = prompt("Error.Ingrese lugar");
		}
		temporada = prompt('Ingrese temporada: “otoño”,”invierno, “verano,”primavera”');
		while (!(temporada == "otoño" || temporada == "invierno" || temporada == "verano" || temporada == "primavera")) {
			temporada = prompt("Error.Ingrese temporada");
		}
		cantidad = parseInt(prompt("Ingrese la cantidad de personas que viajan"));
		while (isNaN(cantidad)) {
			cantidad = parseInt(prompt("Error. Ingrese la cantidad de personas que viajan"));
		}

		switch (lugar) {
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;
		}

		if (banderaTitular == 0 || mayorcantidad < cantidad) {
			banderaTitular = 1;
			mayorcantidad = cantidad;
			sexotitular = sexo;

		}

		if (temporada == "invierno") {
			acumuladorInvierno += cantidad;
			contadorInvierno++;
		}
		respuesta = prompt("¿desea contituar ingresando? s/n")

	} while (respuesta == "s"); //fin de iteración

	if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta) {
		elmaselegido = "Bariloche";
	}
	else if (contadorCataratas > contadorSalta && contadorCataratas > contadorBariloche) {
		elmaselegido = "Cataratas";
	}
	else if (contadorSalta > contadorBariloche && contadorSalta > contadorCataratas) {
		elmaselegido = "Salta";
	}
	else {
		elmaselegido = "hay mas de uno";
	}

	promedio = acumuladorInvierno / contadorInvierno;


	console.log("El lugar mas elegido es: " + elmaselegido);
	console.log("el sexo de titular que lleva más pasajeros es: " + sexotitular);
	console.log("El promedio de personas por viaje,  que viajan en invierno es: " + promedio);

}
/*a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno*/
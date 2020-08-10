/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {

	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadormujeres = 0;
	let totalpersonas = 0;
	let edadtotal = 0;
	let banderahombre = 0
	let Phombre;
	let Tnombre;

	for (i = 0; i < 5; i++) {

		nombre = prompt("Ingrese un nombre");
		while (!(isNaN(nombre))) {
			nombre = prompt("Error. Ingrese un nombre");
		}
		peso = parseInt(prompt("Ingrese un peso"));
		while (isNaN(peso) || peso < 0) {
			peso = parseInt(prompt("Error. Ingrese un peso"));
		}
		do {
			sexo = prompt("ingrese un sexo: f o m");
		} while (!(sexo == "f" || sexo == "m"));

		edad = parseInt(prompt("Ingrese una edad"));
		while (isNaN(edad) || edad < 0) {
			edad = parseInt(prompt("Error.Ingrese una edad"));
		}

		if (sexo == "f") {
			contadormujeres++;
		}

		totalpersonas++;
		edadtotal += edad;

		if (banderahombre == 0 || Phombre < peso) {
			banderahombre = 1;
			Phombre = peso;
			Tnombre = nombre;

		}
	}

	promedio = (edadtotal / totalpersonas).toFixed(2);

	console.log("la cantidad de mujeres es: " + contadormujeres);
	console.log("la edad promedio en total es: " + promedio);
	console.log("El hombre con mayor peso es: " + Tnombre + " con un peso de: " + Phombre);

	/*a)informar la cantidad de mujeres.
	b)la edad promedio en total.
	c)el hombre mas pesado.
	pedir datos por prompt y mostrar por document.write o console.log*/




}


/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/
function mostrar() {

  let marca;
  let precio;
  let peso;
  let tipo;
  let acumulador = 0;
  let liqcaro;
  let marcacara;
  let banderamarca = 0;
  let banderamarca2 = 0;
  let marcabarata;
  let solidobarato;

  do {
    marca = prompt("ingrese una marca");
    while (!(isNaN(marca))) {
      marca = prompt("Error. Ingrese una marca");
    }
    precio = parseInt(prompt("ingrese un precio"));
    while (isNaN(precio) || precio < 0) {
      precio = parseInt(prompt("Error. ingrese un precio"));
    }
    peso = parseInt(prompt("ingrese un peso en kilogramos"));
    while (isNaN(peso) || peso < 0) {
      peso = parseInt(prompt("Error. ingrese un peso"));
    }
    tipo = prompt("ingrese un tipo");
    while (!(tipo == "solido" || tipo == "liquido")) {
      tipo = prompt("Error. ingrese un tipo");
    }

    acumulador += peso;

    switch (tipo) {
      case "liquido":
        if (banderamarca == 0 || liqcaro < precio) {
          banderamarca = 1;
          liqcaro = precio;
          marcacara = marca;
        }
        break;

      case "solido":
        if (banderamarca2 == 0 || solidobarato > precio) {
          banderamarca2 = 1;
          solidobarato = precio;
          marcabarata = marca;
        }
        break;

    }

    respuesta = prompt("¿desea seguir ingresando? s/n:");

  } while (respuesta == "s");



  console.log("el peso total de la compra es: " + acumulador);
  console.log("la marca del más caro de los líquidos es: " + marcacara);
  console.log("la marca del más barato de los sólidos es: " + marcabarata);

}
/*
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos*/
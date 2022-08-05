import Cliente from "./cliente.js";
import Impuesto from "./impuestos.js";

let nombreCliente = "Pedro Picapiedra";
let montoBrutoAnual = 152;
let deduccion = 21;

let primerImpuesto = new Impuesto(montoBrutoAnual, deduccion);
let primerCliente = new Cliente(nombreCliente, primerImpuesto);

let mensaje = `El calculo del impuesto anual del cliente ${primerCliente.nombre}, es de: $ ${primerCliente.calculoImpuesto()}.`;

console.log(mensaje);
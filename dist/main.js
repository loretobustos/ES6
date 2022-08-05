"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nombreCliente = "Pedro Picapiedra";
var montoBrutoAnual = 152;
var deduccion = 21;
var primerImpuesto = new _impuestos["default"](montoBrutoAnual, deduccion);
var primerCliente = new _cliente["default"](nombreCliente, primerImpuesto);
var mensaje = "El calculo del impuesto anual del cliente ".concat(primerCliente.nombre, ", es de: $ ").concat(primerCliente.calculoImpuesto(), ".");
console.log(mensaje);
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this.nombre;
    },
    set: function set(nuevo_nombre) {
      this.nombre = nuevo_nombre;
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this.impuesto;
    },
    set: function set(nuevo_impuesto) {
      this.impuesto = nuevo_impuesto;
    }
  }, {
    key: "calculoImpuesto",
    value: function calculoImpuesto() {
      return (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 0.21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;
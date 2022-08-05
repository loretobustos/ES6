export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre() {
        return this._nombre;
    }
    get impuesto() {
        return this._impuesto;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    set impuesto(nuevo_impuesto) {
        this._impuesto = nuevo_impuesto;
    }

    calculoImpuesto() {
        return (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0.21;
    }
}
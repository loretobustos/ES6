export default class Impuesto {
    constructor(monto_bruto_anual, deducciones) {
        this._monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    }

    get monto_bruto_anual() {
        return this._monto_bruto_anual;
    }

    get deducciones(){
        return this._deducciones;
    }

    set monto_bruto_anual(nuevomonto) {
        this._monto_bruto_anual = nuevomonto;
       
    }

    set deducciones(nuevo_deducciones) {
        this.deducciones = nuevo_deducciones;
    }
}
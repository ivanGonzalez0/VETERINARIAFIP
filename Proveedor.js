"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    Proveedor.prototype.idAleatorio = function () {
        return Math.floor(Math.random() * 10000);
    };
    Proveedor.prototype.alta = function (data) {
        this.nombre = data.nombre;
        this.telefono = data.telefono;
        console.log("Proveedor ".concat(this.nombre, " dado de alta con tel\u00E9fono ").concat(this.telefono, " este es el id: ").concat(this.idAleatorio()));
    };
    Proveedor.prototype.baja = function (id) {
        console.log("Proveedor con ID ".concat(id, " dado de baja"));
    };
    Proveedor.prototype.modificarDatos = function (id, nuevosDatos) {
        if (nuevosDatos.nombre)
            this.nombre = nuevosDatos.nombre;
        if (nuevosDatos.telefono)
            this.telefono = nuevosDatos.telefono;
        console.log("Datos modificados del proveedor ".concat(this.nombre));
    };
    return Proveedor;
}());
exports.Proveedor = Proveedor;

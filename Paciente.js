"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Cliente_1 = require("./Cliente");
var Paciente = /** @class */ (function (_super) {
    __extends(Paciente, _super);
    function Paciente(nombre, especie, exotica, id) {
        var _this = _super.call(this, nombre, 0, 0) || this;
        _this.nombre = nombre;
        _this.especie = especie;
        _this.exotica = exotica;
        return _this;
    }
    //getters y setters de la clase
    Paciente.prototype.getNombrePaciente = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombrePaciente = function (nombreNuevo) {
        this.nombre = nombreNuevo;
    };
    Paciente.prototype.getExotico = function () {
        return this.exotica;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.setEspecie = function (especieNueva) {
        this.especie = especieNueva;
    };
    Paciente.prototype.altaP = function (datos) {
        this.nombre = datos.nombre;
        this.especie = datos.especie;
        this.exotica = datos.exotica;
        console.log("el Paciente ".concat(this.nombre, " dado de alta"));
    };
    Paciente.prototype.baja = function (id) {
        console.log("Paciente con ID ".concat(id, " dado de baja"));
    };
    Paciente.prototype.modificarDatos = function (id, nuevosDatos) {
        if (nuevosDatos.nombre)
            this.nombre = nuevosDatos.nombre;
        if (nuevosDatos.especie)
            this.especie = nuevosDatos.especie;
        if (nuevosDatos.exotica !== undefined)
            this.exotica = nuevosDatos.exotica;
        console.log("Datos modificados del paciente ".concat(this.nombre));
    };
    return Paciente;
}(Cliente_1.Cliente));
exports.Paciente = Paciente;
/*Pacientes (mascotas): nombre, especie (si no es perro o gato,
deberá registrarse como exótica), id del dueño, las veterinarias
 deben contar con la opción de alta, baja y modificación de
los mismos.

import { Veterinaria } from "./Veterinaria";//Se define la clase Paciente que implementa la interfaz Veterinaria. Esto significa que debe proporcionar implementaciones para los métodos que la interfaz requiere.

export class Paciente implements Veterinaria{
    private nombre: string;//almacena nombre
    private especie: string;
    private exotica: boolean;
    private id: number;// false = perro y gato

    public constructor(nombre:string, especie: string, exotica: boolean,){ //3 parametros, se crean instancias del paciente
        this.nombre= nombre;
        this.especie= especie;
        this.exotica= exotica;
    }
    public alta(): void {
        console.log(`el paciente ${this.nombre} fue dado de alta`);
    }
    public baja(): void {
        console.log(`el paciente ${this.nombre} fue dado de baja`);
    }
    public modificarDatos(): void {
        console.log(`Datos modificados del paciente ${this.nombre}`);
    }
    
    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
    }
}

/* la clase Paciente representa a una mascota en una veterinaria y contiene propiedades para almacenar información relevante
como el nombre, la especie y si es exótica o no. Implementa los métodos de la interfaz Veterinaria, lo que le
permite manejar operaciones como alta, baja y modificación de datos. Además, incluye un método para generar un
ID aleatorio, lo que puede ser útil para identificar a cada paciente de forma única.*/ 

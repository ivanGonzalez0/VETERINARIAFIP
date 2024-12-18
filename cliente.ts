import { Paciente } from "./paciente";
import { Red } from "./Red";

export class Cliente implements Red {
    protected nombre: string;
    protected telefono: number;
    protected numeroVisitas: number;
    protected paciente: Paciente[];
    protected idCliente: number;

    constructor(nombre: string, telefono: number, id?: number) {
        this.nombre = nombre;
        this.numeroVisitas = 0;
    }

    public getId(): number {
        return this.idCliente;
    }
    public setId(idNuevo: number): void {
        this.idCliente = idNuevo;
    }
    public getNombreCliente(): string {
        return this.nombre;
    }
    public setNombreCliente(nombreNuevo: string) {
        this.nombre = nombreNuevo;
    }
    public getTelefonoCliente(): number {
        return this.telefono;
    }
    public setTelefonoCliente(telefonoNuevo: number) {
        this.telefono = telefonoNuevo;
    }
    public getVisitas(): number {
        return this.numeroVisitas;
    }

    public vipCliente(): boolean {
        return this.numeroVisitas >= 5;
    }

    public registrarVisita(): void {
        this.numeroVisitas++;
        // console.log(`El cliente ${this.nombre} es VIP, este es el Total de visitas: ${this.vipCliente()}`);
        if (this.vipCliente()) {
            console.log(`El cliente ${this.nombre} es VIP`)
        } else {
            console.log(`El cliente ${this.nombre} no es VIP`);
        }
    }
    // agregar y eliminar
    public agregarPaciente(paciente: Paciente): string {
        const i = this.paciente.includes(paciente);
        if (i) {
            return `El paciente ${paciente.nombre} ya existe`;
        } else {
            this.paciente.push(paciente);
            return `El paciente ${paciente.nombre} fue creado`;
        }
    }
    public eliminarPaciente(nombrePacienteAEliminar: string): void {
        const indice = this.paciente.findIndex(suc => suc.getNombrePaciente() === nombrePacienteAEliminar);
        if (indice !== -1) {
            this.paciente.splice(indice, 1);
            console.log('\x1b[33m%s\x1b[0m', `El paciente con el nombre ${nombrePacienteAEliminar} fue eliminado con exito.`);
        } else {
            console.log('\x1b[31m%s\x1b[0m', `No se encontro ningun paciente con el nombre ${nombrePacienteAEliminar}.`);
        }
    }

    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
    }

    public alta(datos: { nombre: string; telefono: number }): void {
        this.nombre = datos.nombre;
        this.telefono = datos.telefono;
        console.log(`Cliente ${this.nombre} dado de alta con teléfono ${this.telefono}, este es el id: ${this.idAleatorio()}`);
    }

    public baja(id: number): void {
        console.log(`Cliente con ID ${id} dado de baja`);
    }

    public modificarDatos(id: number, nuevosDatos: { nombre?: string; telefono?: number }): void {
        if (nuevosDatos.nombre) this.nombre = nuevosDatos.nombre;
        if (nuevosDatos.telefono) this.telefono = nuevosDatos.telefono;
        console.log(`Datos modificados del cliente ${this.nombre}`);
    }
}

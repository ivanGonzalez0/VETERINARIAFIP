import { Red } from "./Red";

// Veterinaria 1
export class Veterinaria implements Red {
    private nombre: string;
    private direccion: string;

    public constructor(nombre: string, direccion: string, id?: number) {
        this.nombre = nombre;
        this.direccion = direccion;
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }
    public getDireccion(): string {
        return this.direccion;
    }

    // Métodos
    public alta(data: any): void {
        console.log(`Sucursal ${this.nombre} dada de alta`);
        console.error(`este es el id: ${this.idAleatorio()}`);
    }
    public baja(id: number): void {
        console.log(`Sucursal con ID ${id} dada de baja.`);
    }
    public modificarDatos(id: number, newData: any): void {
        console.log(`Datos de la sucursal con ID ${id} modificados.`);
    }
    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
    }
}
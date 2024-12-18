import { Cliente } from "./Cliente";

export class Paciente extends Cliente {
    public nombre: string;
    private especie: string;
    private exotica: boolean;

    constructor(nombre: string, especie: string, exotica: boolean, id?: number) {
        super(nombre, 0)
        this.nombre = nombre;
        this.especie = especie;
        this.exotica = exotica;
    }

    //getters y setters de la clase
    public getNombrePaciente(): string {
        return this.nombre;
    }
    public setNombrePaciente(nombreNuevo: string): void {
        this.nombre = nombreNuevo;
    }
    public getExotico(): boolean{
        return this.exotica;
    }
    public getEspecie(): string {
        return this.especie;
    }
    public setEspecie(especieNueva: string): void {
        this.especie = especieNueva;
    }

    public altaP(datos: { nombre: string; especie: string; exotica: boolean, id:number }): void {
        this.nombre = datos.nombre;
        this.especie = datos.especie;
        this.exotica = datos.exotica;
        console.log(`El Paciente ${this.nombre} fue dado de alta`);
    }

    public baja(id: number): void {
        console.log(`Paciente con ID ${id} dado de baja`);
    }

    public modificarDatos(id: number, nuevosDatos: { nombre?: string; especie?: string; exotica?: boolean }): void {
        if (nuevosDatos.nombre) this.nombre = nuevosDatos.nombre;
        if (nuevosDatos.especie) this.especie = nuevosDatos.especie;
        if (nuevosDatos.exotica !== undefined) this.exotica = nuevosDatos.exotica;
        console.log(`Datos modificados del paciente ${this.nombre}`);
    }
}

/*Esta línea importa la clase Cliente desde un archivo llamado Cliente. Esto significa que Paciente se basa en la funcionalidad de Cliente.
Aquí se define la clase Paciente, que extiende (hereda) de la clase Cliente. Esto significa que Paciente tendrá todas las propiedades y métodos de Cliente, 
además de sus propias propiedades y métodos.
nombre: es una propiedad pública que almacena el nombre del paciente.
especie: es una propiedad privada que almacena la especie del paciente (por ejemplo, perro, gato, etc.).
exotica: es una propiedad privada que indica si el paciente es de una especie exótica (booleano).
El constructor recibe cuatro parámetros: nombre, especie, exotica, e id.
super(nombre, 0, 0);: Llama al constructor de la clase padre (Cliente) pasando el nombre y dos ceros (que podrían representar 
el teléfono y el ID del cliente, aunque aquí no se están usando).
Luego, se inicializan las propiedades nombre, especie y exotica con los valores proporcionados.
Getters y Setters
Estos son métodos que permiten acceder y modificar las propiedades de la clase
getNombrePaciente: Devuelve el nombre del paciente.
setNombrePaciente: Permite establecer un nuevo nombre para el paciente.
getExotico: Devuelve un valor booleano que indica si el paciente es exótico.
getEspecie: Devuelve la especie del paciente.
setEspecie: Permite establecer una nueva especie para el paciente.
Metodo alta:
Este método permite dar de alta a un paciente. Recibe un objeto datos que contiene el nombre, especie, exotica, e id.
Se asignan las propiedades del paciente con los valores de datos.
Luego, se imprime un mensaje en la consola indicando que el paciente ha sido dado de alta.
metodo baja:
Este método imprime un mensaje en la consola indicando que un paciente con un ID específico ha sido dado de baja.
metodo modificarDatos:
Se verifica si nuevosDatos.nombre existe y tiene un valor. Si es así, se asigna este valor a la propiedad nombre del objeto actual (this.nombre).
Similar al caso anterior, se verifica si nuevosDatos.especie tiene un valor. Si lo tiene, se actualiza la propiedad especie del objeto actual.
Modificar Exótico:Aquí se verifica si nuevosDatos.exotica es diferente de undefined. Esto es importante porque exotica es una propiedad booleana, 
y podría ser true o false. Si se proporciona un valor para exotica, se actualiza la propiedad correspondiente del objeto.
Impresión de Mensaje:Finalmente, se imprime un mensaje en la consola que indica que los datos del paciente han sido modificados, 
mostrando el nombre actual del paciente.

Este método permite modificar los datos del paciente. Recibe un ID y un objeto nuevosDatos que puede contener un nuevo nombre, especie, y/o exotica.
Se verifica si cada propiedad está presente en nuevosDatos y, si es así, se actualiza la propiedad correspondiente.
Finalmente, se imprime un mensaje en la consola indicando que los datos del paciente han sido modificados.
Resumen
En resumen, la clase Paciente es una extensión de la clase Cliente que agrega propiedades y métodos específicos para manejar información sobre pacientes, como su nombre, 
especie y si son exóticos. Incluye métodos para dar de alta, dar de baja y modificar la información de un paciente, así como getters y setters para acceder 
y modificar sus propiedades. Esto sugiere que el contexto de uso podría estar relacionado con la atención médica o veterinaria.*/
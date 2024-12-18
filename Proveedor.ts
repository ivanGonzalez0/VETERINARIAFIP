import { Red } from "./Red";

export class Proveedor implements Red {
    private nombre: string;
    private telefono: number;

    constructor(nombre: string, telefono: number, id?: number) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
    public idAleatorio(): number {
        return Math.floor(Math.random() * 10000);
    }

    public alta(data: { nombre: string; telefono: number }): void {
        this.nombre = data.nombre;
        this.telefono = data.telefono;
        console.log(`Proveedor ${ this.nombre } dado de alta con teléfono ${ this.telefono } este es el id: ${this.idAleatorio()}`);
    }

    public baja(id: number): void {
        console.log(`Proveedor con ID ${ id } dado de baja`);
    }

    public modificarDatos(id: number, nuevosDatos: { nombre?: string; telefono?: number }): void {
        if (nuevosDatos.nombre) this.nombre = nuevosDatos.nombre;
        if (nuevosDatos.telefono) this.telefono = nuevosDatos.telefono;
        console.log(`Datos modificados del proveedor ${ this.nombre }`);
    }
}

/*Esta línea importa la interfaz Red desde un archivo llamado Red. Esto significa que la clase Proveedor
 va a implementar los métodos definidos en la interfaz Red.
 Aquí se define la clase Proveedor, que implementa la interfaz Red. Esto implica que la clase debe proporcionar implementaciones para los métodos 
 especificados en Red.
 nombre: es una propiedad privada que almacena el nombre del proveedor.
telefono: es una propiedad privada que almacena el número de teléfono del proveedor.
El constructor recibe dos parámetros: nombre y telefono. Estos valores se utilizan para inicializar las propiedades nombre y telefono del proveedor 
cuando se crea una nueva instancia de la clase.
Metodo generar id aleatorio:
Este método genera y devuelve un número aleatorio entre 0 y 9999. Este ID aleatorio podría ser utilizado como un identificador único para
 el proveedor.
metodo alta:Este método permite dar de alta a un proveedor. Recibe un objeto data que contiene el nombre y el telefono.
Asigna los valores de data a las propiedades nombre y telefono del proveedor.
Luego, imprime un mensaje en la consola indicando que el proveedor ha sido dado de alta, mostrando su nombre, teléfono y un
 ID aleatorio generado.
 metodo baja: Este método permite dar de baja a un proveedor. Recibe un número entero que representa el ID del proveedor.
Imprime un mensaje en la consola indicando que el proveedor ha sido dado de baja, mostrando su ID.
metodo modificarDatos: Este método permite modificar los datos de un proveedor. Recibe dos parámetros: id que representa el ID del
 proveedor y nuevosDatos que contiene los nuevos datos a modificar.
Asigna los valores de nuevosDatos a las propiedades nombre y telefono del proveedor.
Luego, imprime un mensaje en la consola indicando que los datos del proveedor con ID id han sido modificados, mostrando su ID y los
 nuevos datos.
 metodo modificar datos Este método permite modificar los datos del proveedor. Recibe un ID y un objeto nuevosDatos que puede contener un 
 nuevo nombre y/o telefono.
Verifica si nuevosDatos.nombre existe y, si es así, actualiza la propiedad nombre. Lo mismo se aplica para telefono.
Finalmente, imprime un mensaje en la consola indicando que los datos del proveedor han sido modificados, mostrando el nombre 
actual del proveedor.
Resumen
En resumen, la clase Proveedor implementa la interfaz Red y proporciona funcionalidades para gestionar proveedores, 
incluyendo dar de alta, dar de baja y modificar sus datos. Utiliza un ID aleatorio para identificar a cada proveedor 
y permite la modificación de sus propiedades de forma flexible. Este diseño sugiere que la clase podría ser parte 
de un sistema más grande para gestionar proveedores en un contexto determinado, como un sistema de gestión empresarial.
Este método genera y devuelve un número aleatorio entre 0 y 9999. Este ID aleatorio podría ser utilizado como un 
identificador único para el proveedor.*/
import * as rls from "readline-sync";
import { Paciente } from "./paciente";
import { Cliente } from "./cliente";
import { Veterinaria } from "./sucursal";
import { Proveedor } from "./proveedor";

let bienvenido: string = rls.question("Presione 'X' para ver el menu: ");
let cliente: Cliente | null = null; // Declarar fuera del bloque
let cliente2 = new Cliente("Fabian", 35686975);
let cliente3 = new Cliente("Catalina", 47558320);

let paciente: Paciente | null = null;
let paciente2 = new Paciente("Simba", "perro", false);
let paciente3 = new Paciente("Roberto", "loro", true);

let sucursal: Veterinaria | null = null;
let veterinaria2 = new Veterinaria("Sr. Firulais", "Urquiza 123");
let veterinaria3 = new Veterinaria("Mr. bigotes", "Av.Pringles 432");

let proveedor: Proveedor | null = null;
let proveedor2 = new Proveedor("Royal canin", 2284456789);
let proveedor3 = new Proveedor("Company", 2284214365);

while (true) {
    if (bienvenido.toLowerCase() === "x") {
        console.error("-----------------------------");
        console.log("1. SUCURSALES");
        console.log("2. CLIENTES");
        console.log("3. PACIENTES");
        console.log("4. PROVEEDORES");
        console.error("-----------------------------");

        let menu: number = rls.questionInt("Ingrese un numero del menu para ver el contenido: ");
        switch (menu) {
            case 1:
                console.error("-----------------------------");
                console.log("1. Mostrar Sucursal");
                console.log("2. Agregar Sucursal");
                console.log("3. Modificar Sucursal");
                console.log("4. Eliminar Datos");
                const opcionSucursal = rls.questionInt("Elija una opcion: ");

                // Muestra Sucursal
                if (opcionSucursal === 1) {
                    console.table(veterinaria2);
                    console.table(veterinaria3);
                } 

                if (opcionSucursal === 2) {
                    // Agregar sucursal
                    const nombreSucursal = rls.question("Ingrese el nombre de la sucursal: ");
                    const direccionSucursal = rls.question("Ingrese la direccion de la sucursal: ");

                    sucursal = new Veterinaria(nombreSucursal, direccionSucursal); // Crear nueva instancia
                    sucursal.alta({ nombre: nombreSucursal, Direccion: direccionSucursal });

                } else if (opcionSucursal === 3) {

                    // Modificar Sucursal
                    if (sucursal) { // Verificar que exista
                        const idSucursal = rls.questionInt("Ingrese el ID de la sucursal para modificar: ");
                        const newNombreSucursal = rls.question("Ingrese el nuevo nombre de la sucursal: ");
                        const newDireccionSucursal = rls.questionInt("Ingrese la nueva direccion: ");
                        sucursal.modificarDatos(idSucursal, { nombre: newNombreSucursal, direccion: newDireccionSucursal });
                    } else {
                        console.log("No hay Sucursal para modificar.");
                    }
                } else if (opcionSucursal === 4) {

                    // eliminar la sucursal
                    if (sucursal) {
                        console.log("La", sucursal, "fue eliminada");
                    } else {
                        console.log("No hay Sucursal para eliminar.");
                    }
                }
                console.error("-----------------------------");
                break;

            case 2:
                console.error("-----------------------------");
                console.log("1. Mostrar Cliente");
                console.log("2. Agregar Cliente");
                console.log("3. Modificar Cliente");
                console.log("4. Eliminar Datos");
                const opcionCliente = rls.questionInt("Elija una opcion: ");

                // Muestra Cliente
                if (opcionCliente === 1) {
                    console.table(cliente2);
                    cliente2.registrarVisita();
                    console.table(cliente3);
                }

                if (opcionCliente === 2) {
                    // Agregar cliente
                    const nombreCliente = rls.question("Ingrese el nombre del cliente: ");
                    const telefonoCliente = rls.questionInt("Ingrese el telefono del cliente: ");

                    cliente = new Cliente(nombreCliente, telefonoCliente); // Crear nueva instancia

                    // llama al metodo para saber si es vip 
                    cliente.registrarVisita();

                    cliente.alta({ nombre: nombreCliente, telefono: telefonoCliente });

                } else if (opcionCliente === 3) {

                    // Modificar cliente
                    if (cliente) { // Verificar que exista
                        const idCliente = rls.questionInt("Ingrese el ID del cliente a modificar: ");
                        const newNombreCliente = rls.question("Ingrese el nuevo nombre del cliente: ");
                        const newTelefonoCliente = rls.questionInt("Ingrese el nuevo telefono del cliente: ");

                        cliente.modificarDatos(idCliente, { nombre: newNombreCliente, telefono: newTelefonoCliente });
                    } else {
                        console.log("No hay cliente para modificar.");
                    }
                } else if (opcionCliente === 4) {
                    // elimina el cliente
                    if (cliente) {
                        console.log("El", cliente, "fue eliminado");
                    } else {
                        console.log("No hay cliente para mostrar.");
                    }
                }
                console.error("-----------------------------");
                break;

            case 3: // PACIENTES
                console.error("-----------------------------");
                console.log("1. Mostrar Paciente");
                console.log("2. Agregar Paciente");
                console.log("3. Modificar Paciente");
                console.log("4. Eliminar Datos");

                const opcionPaciente = rls.questionInt("Elija una opcion: ");
                
                // Muestra Paciente
                if (opcionPaciente === 1) {
                    console.table(paciente2);
                    console.table(paciente3);
                }

                if (opcionPaciente == 2) {
                    // Agregar paciente
                    const nombrePaciente = rls.question("Ingrese el nombre del paciente: ");
                    const especiePaciente = rls.question("Ingrese la especie del paciente: ");
                    const exoticaPaciente = rls.keyInYNStrict("¿Es el paciente exotico? (si/no): ");// respuesta si(Y) o no(N)
                    const idCliente = rls.questionInt("ingrese el ID del Cliente: ");

                    paciente = new Paciente(nombrePaciente, especiePaciente, exoticaPaciente); // Crear nueva instancia
                    paciente.altaP({ nombre: nombrePaciente, especie: especiePaciente, exotica: exoticaPaciente, id: idCliente });

                } else if (opcionPaciente == 3) {
                    // Modificar paciente
                    if (paciente) { // Verificar que exista
                        const idPaciente = rls.questionInt("Ingrese el ID del paciente a modificar: ");
                        const newNombrePaciente = rls.question("Ingrese el nuevo nombre del paciente: ");
                        const newEspeciePaciente = rls.question("Ingrese la nueva especie del paciente: ");
                        const newExoticaPaciente = rls.keyInYNStrict("¿Es el paciente exotico? (y/n): ");// respuesta si(Y) o no(N)
                        paciente.modificarDatos(idPaciente, { nombre: newNombrePaciente, especie: newEspeciePaciente, exotica: newExoticaPaciente });

                    } else {
                        console.log("No hay paciente para modificar.");
                    }
                } else if (opcionPaciente == 4) {
                    // elimina al paciente
                    if (paciente) {
                        console.log("El", paciente, "fue eliminado");
                    } else {
                        console.log("No hay paciente para mostrar.");
                    }
                }
                console.error("-----------------------------");
                break;
            case 4:
                console.error("-----------------------------");
                console.log("1. Mostrar Proveedor");
                console.log("2. Agregar Proveedor");
                console.log("3. Modificar Proveedor");
                console.log("4. Eliminar Datos");
                const opcionProveedor = rls.questionInt("Elija una opcion: ");

                // Muestra proveedor
                if (opcionProveedor === 1) {
                    console.table(proveedor2);
                    console.table(proveedor3);
                }

                if (opcionProveedor === 2) {
                    // Agregar proveedor
                    const nombreProveedor = rls.question("Ingrese el nombre del proveedor: ");
                    const telefonoProveedor = rls.questionInt("Ingrese el telefono del proveedor: ");

                    proveedor = new Proveedor(nombreProveedor, telefonoProveedor); // Crear nueva instancia
                    proveedor.alta({ nombre: nombreProveedor, telefono: telefonoProveedor });

                } else if (opcionProveedor === 3) {

                    // Modificar Proveedor
                    if (proveedor) { // Verificar que exista
                        const idProveedor = rls.questionInt("Ingrese el ID del proveedor para modificar: ");
                        const newNombreProveedor = rls.question("Ingrese el nuevo nombre del proveedor: ");
                        const newTelefonoProveedor = rls.questionInt("Ingrese el nuevo telefono: ");
                        proveedor.modificarDatos(idProveedor, { nombre: newNombreProveedor, telefono: newTelefonoProveedor });
                    } else {
                        console.log("No hay proveedor para modificar.");
                    }
                } else if (opcionProveedor === 4) {

                    // eliminar el proveedor
                    if (proveedor) {
                        console.log("la", proveedor, "fue eliminada");
                    } else {
                        console.log("No hay proveedor para mostrar.");
                    }
                }
                console.error("-----------------------------");
                break;
            default:
                console.error("Opción inválida, por favor intente de nuevo.");
        }
    } else {
        console.error("Error, por favor escriba la letra X nuevamente.");
    }

    // MENÚ PRINCIPAL
    let menu2: string = rls.question("Ingrese 'X' para volver al menu principal o 'S' para salir: ");
    if (menu2.toLowerCase() === "x") {
        console.error("-----------------------------");
        console.log("Volviendo al menu principal...");
    } else if (menu2.toLowerCase() === "s") {
        console.error("-----------------------------");
        console.error("Has salido con exito");
        console.error("-----------------------------");
        break;
    }
}
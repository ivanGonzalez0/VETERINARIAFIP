export interface Red {
    alta(data: any): void; // acepta datos de parametros
    baja(id: number): void; // acepta el id para removerlo
    modificarDatos(id: number, newData: any): void; // Acepta ID y nuevos datos
}
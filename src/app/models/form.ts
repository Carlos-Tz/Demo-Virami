import { Call } from './call';
export interface Form {
    nombre: string;
    curp: string;
    tel: string;
    fecha: string;
    credito: string;
    mcredito: string;
    observaciones: string;
    estado: string;
    llamadas: Call[];
}

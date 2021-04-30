import { Fechainscripcion } from './fechainscripcion';

export interface Periodo {
    idperiodo?:number,
    fechaInicial:string,
    fechaFinal:string,
    fechainscripcion?:Fechainscripcion,
    idUsuario?:number,
    tipo:string,
    idcurso?:number,
    idsede?:number
}

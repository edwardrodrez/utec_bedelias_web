import { Carrera } from './carrera';
import { Inscripcion } from './inscripcion';

export interface periododeincripciones {
    idperiododeincripciones?:number,
    fechaInicial:Date,
    fechaFinal:Date,
    idcarrera?:number,
    carrera?:Carrera,
    inscripciones:Inscripcion[]

}

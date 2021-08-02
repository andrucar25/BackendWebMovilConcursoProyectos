import { Document } from "mongoose";

export interface Resultado extends Document{
    idProyecto:string;
    concurso:string;
    nombreProyecto:string;
    categoria:string;
    resultadoFinal:number;
    puesto:number;
}
import { Document } from 'mongoose'
export interface Orden extends Document{
    idConcurso:string;
    ordenProyectos:[];
    tituloConcurso:string;
    categoria:string;
    estado:string;
}
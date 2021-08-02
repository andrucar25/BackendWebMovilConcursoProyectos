import { Document } from 'mongoose'
export interface Cursos extends Document{
    ciclo:string;
    codigo:number;
    descripcion:string;
    docente:string;
    createdAt:Date;
}
import { Document } from 'mongoose'
export interface Ciclos extends Document{
    descripcion:string; 
    cursos:string[];
}
import { Document } from 'mongoose'
export interface Concurso extends Document{
    titulo:string;
    categorias:[];
    fechaInicio:String;
    fechaFin:String;
    horaInicio:String;
    horaFin:String;
    estado:Boolean;
}
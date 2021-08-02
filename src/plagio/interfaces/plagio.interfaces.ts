import { Document } from 'mongoose'
export interface Plagios extends Document{
    id:String;
    porcentajeTotal:number;
    analisis:[];
    texto:Object;
    fecha:String;
    hora:String;
}
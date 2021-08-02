import { Document } from 'mongoose'
export interface Docentes extends Document{
    estado:boolean;
    codigo:string; 
    contrasenia:string;
    nombres:string; 
    apellidos:string; 
    correo:string;
    celular:string;
}
import { Document } from 'mongoose'
export interface Estudiantes extends Document{
    codigo:number;
    contrasenia:string;
    nombres:string; 
    apellidos:string; 
    correo:string;
    ciclo:string;
    celular:string;
    estado:boolean;
}
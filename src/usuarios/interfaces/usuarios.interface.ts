import { Document } from "mongoose";

export interface Usuarios extends Document{
    codigo:number;
    contrasenia:string;
    nombres:string;
    apellidos:string;
    celular:number;
    correo:string;
    rol:string;
}
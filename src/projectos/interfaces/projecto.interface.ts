import { Document } from 'mongoose'
export interface Projecto extends Document{
    _id:object;
    idConcurso:string;
    nombreConcurso:string;
    nombreProyecto:string;
    nombreGrupo:string;
    encargado:string;
    ciclo:string;
    curso:string;
    docente:string;
    estudiantes:[{
        codigo:number;
        nombres:string;
        apellidos:string;
        correo:string;
        celular:string;
    }];
    categoria:string;    
    estado:string;
    path:[];
    github:string;
    createdAt:Date;
    concurso:string;
}
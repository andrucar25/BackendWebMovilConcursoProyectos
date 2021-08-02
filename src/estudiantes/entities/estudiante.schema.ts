import { Schema } from "mongoose";

export const EstudianteSchema = new Schema({
    codigo:{
        type:Number,
        required:true
    },
    contrasenia:{
        type:String,
        required:true
    },
    nombres:{
        type:String,
        required:true
    },
    apellidos:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    ciclo:{
        type:String,
        required:true
    },
    celular:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean,
        default:true
    }
    
})
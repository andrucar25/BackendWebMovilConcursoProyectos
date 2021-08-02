import { Schema } from "mongoose";

export const UsuarioSchema = new Schema({
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
    celular:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true
    },
    correo:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})
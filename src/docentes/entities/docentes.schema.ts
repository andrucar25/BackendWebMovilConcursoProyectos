import { Schema } from "mongoose";

export const DocentesSchema = new Schema({
    // estado:boolean;
    // codigo:string; 
    // contrasenia:string;
    // nombres:string; 
    // apellidos:string; 
    // correo:string;
    // celular:string;
    estado:{
        type:Boolean,
        default:true,
    },
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
    celular:{
        type:Number,
        required:true
    },
    
})
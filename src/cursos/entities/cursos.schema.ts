import { Schema } from "mongoose"; 

export const CursoSchema = new Schema({
    ciclo:{
        type:String,
        required:true
    },
    codigo:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    docente:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
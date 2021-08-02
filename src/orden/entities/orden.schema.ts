import { Schema } from "mongoose";

export const OrdenSchema = new Schema({
    idConcurso:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    ordenProyectos:{
        type:Array,
        required:true
    },
    tituloConcurso:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        default:"I"
    }
})
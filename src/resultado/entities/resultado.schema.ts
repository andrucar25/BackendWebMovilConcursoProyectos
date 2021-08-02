import { Schema } from "mongoose";

export const ResultadoSchema = new Schema({
    idProyecto:{
        type:String,
        required:true
    },
    concurso:{
        type:String,
        required:true
    },
    nombreProyecto:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    resultadoFinal:{
        type:Number,
        required:true
    },
    puesto:{
        type:Number,
        required:true
    }
})
import { Schema } from "mongoose";

export const ConcursoSchema = new Schema({
   titulo:{
       type:String,
       required:true
   },
   categorias:{
       type:Array,
       default:[]
   },
    fechaInicio:{
        type:String,
        required:true
    },
    fechaFin:{
        type:String,
        required:true
    },
    horaInicio:{
        type:String,
        required:true
    },
    horaFin:{
        type:String,
        required:true
    },
    estado:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
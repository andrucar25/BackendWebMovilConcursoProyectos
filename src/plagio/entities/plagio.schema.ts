import { Schema } from "mongoose";

export const PlagioSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    porcentajeTotal:{
        type:Number,
        required:true
    },
    analisis:{
        type:Array,
        required:true
    },
    texto:{
        type:Object,
        required:true
    },
    fecha:{
        type:String,
        required:true
    },
    hora:{
        type:String,
        required:true
    },
})
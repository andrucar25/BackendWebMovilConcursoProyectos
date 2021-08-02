import { Schema } from "mongoose";

export const CicloSchema = new Schema({
    descripcion:{
        type:String,
        required:true
    },
    cursos:{
        type:Array,
    }
})
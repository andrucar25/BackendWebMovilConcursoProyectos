import { Schema } from "mongoose";

export const VotacionSchema = new Schema({
    idProyecto:{
        type:String,
        required:true
    },
    nombreProyecto:{
        type:String,
        required:true
    },
    IdVotante:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    },
    categoria:{
        type:String,
        required:true
    },
    votos:{
        type:Object,
        required:true
    },
    resultado:{
        type:Number,
        required:true
    }
})
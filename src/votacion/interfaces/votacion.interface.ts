import { Document } from 'mongoose'

export interface Votacion extends Document{
    idProyecto:String;
    nombreProyecto:String;
    IdVotante:String;
    tipo:String;
    categoria:String;
    votos:object;
    // cat1
    // cat2
    // cat3
    // cat4
    // cat5
    // cat6
    resultado:Number;
}
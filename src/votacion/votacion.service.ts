import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResultado } from 'src/resultado/dto/resultado.dto';
import { Resultado } from 'src/resultado/interfaces/resultado.interface';
import { CreateVotacion } from './dto/votacion.dto';
import { Votacion } from './interfaces/votacion.interface';

@Injectable()
export class VotacionService {
    constructor(@InjectModel('Votacion') private votacionModel:Model<Votacion>){}

    async getVotacion():Promise<Votacion[]>{
        return await this.votacionModel.find()
    }
    async getVotacionJurados(id){
        const votoJurados = await this.votacionModel.find({tipo:"J",idProyecto:'id'})
        return votoJurados
    }
    async getVotacionAlumnos(){
        const votoAlumnos = await this.votacionModel.find({tipo:"A",idProyecto:'id'})
        return votoAlumnos
    }
    async createVotacion(dto:CreateVotacion):Promise<Votacion>{
        const votacion = new this.votacionModel(dto)
        return await votacion.save()
    }
    async getVotacionProyectoId(id){
        return await this.votacionModel.find({idProyecto:id})
    }
    async getOneVotacion(id:string):Promise<Votacion[]> {
        return await this.votacionModel.find({IdVotante: id})
    }
}

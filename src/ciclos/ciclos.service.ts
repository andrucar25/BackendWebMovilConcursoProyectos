import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ciclos } from './interfaces/ciclo.interface'
import { CreateCicloDto } from './dto/ciclos.dto'
@Injectable()
export class CiclosService {
    constructor(@InjectModel('Ciclos') private ciclosModel:Model<Ciclos>){}

    async getCiclos():Promise<Ciclos[]> {
        return await this.ciclosModel.find()
    }
    async getOneCiclo(id:string):Promise<Ciclos> {
        return await this.ciclosModel.findById(id)
    }
    async createCiclo(createCicloDto:CreateCicloDto):Promise<Ciclos> {
        const ciclo =  new this.ciclosModel(createCicloDto)
        return await ciclo.save()
    }

}

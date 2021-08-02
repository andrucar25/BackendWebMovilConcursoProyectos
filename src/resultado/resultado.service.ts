import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateResultado } from './dto/resultado.dto';
import { Resultado } from './interfaces/resultado.interface';

@Injectable()
export class ResultadoService {
    constructor(@InjectModel('Resultados') private resultadoModel:Model<Resultado>){}

    async getResultado():Promise<Resultado[]>{
        return await this.resultadoModel.find()
    }

    async createResultado(dto:CreateResultado):Promise<Resultado>{
        const resultado = new this.resultadoModel(dto)
        return await resultado.save()
    }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDocentesDto } from './dto/docentes.dto';
import { Docentes } from './interfaces/docentes.interface';

@Injectable()
export class DocentesService {
    constructor(@InjectModel('Docentes') private docentesModel:Model<Docentes>){}

    async getDocentes():Promise<Docentes[]>{
        return await this.docentesModel.find();
    }
    async CreateDocente(dto:CreateDocentesDto):Promise<Docentes> {
        const docente = new this.docentesModel(dto)
        return await docente.save()
    }
}

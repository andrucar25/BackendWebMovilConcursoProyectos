import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePlagioDto } from './dto/plagio.dto';
import { Plagios } from './interfaces/plagio.interfaces';

@Injectable()
export class PlagioService {
    constructor(@InjectModel('Plagio') private plagioModel:Model<Plagios>){}

    async getPlagios():Promise<Plagios[]>{
        return await this.plagioModel.find()
    }
    async createPlagio(dto:CreatePlagioDto):Promise<Plagios>{
        const plagio = new this.plagioModel(dto)
        return await plagio.save()
    }
    async getOnePlagio(id:string):Promise<Plagios> {
        return await this.plagioModel.findOne({id:id})
    }
}

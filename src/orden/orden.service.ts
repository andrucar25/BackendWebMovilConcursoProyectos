import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiGatewayTimeoutResponse } from '@nestjs/swagger';
import { Model } from 'mongoose';
import { CreateOrdenDto } from './dto/orden.dto';
import { Orden } from './interfaces/orden.interface';

@Injectable()
export class OrdenService {

    constructor(@InjectModel('Orden') private ordenModel:Model<Orden>){}

    async getOrden(id):Promise<Orden[]>{
        return await this.ordenModel.find({idConcurso:id});
    }
    async CreateOrden(dto:CreateOrdenDto):Promise<Orden> {
        const orden = new this.ordenModel(dto)
        return await orden.save()
    }
    async updateEstado(id,estado){
        return await this.ordenModel.findOneAndUpdate({_id:id},{estado:estado});
    }


}

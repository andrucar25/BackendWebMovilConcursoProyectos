import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'dns';
import { Model } from 'mongoose';
import { CreateProjectosDto } from './dto/projectos.dto';
import { Projecto } from './interfaces/projecto.interface';

@Injectable()
export class ProjectosService {

    constructor(@InjectModel('Projectos') private projectoModel:Model<Projecto>){}
    async getProjectosHistoricos():Promise<Projecto[]>{
        return await this.projectoModel.find({estado:"true"})
    }
    async getProjectos():Promise<Projecto[]>{
        return await this.projectoModel.find()
    }
    async getAprobados():Promise<Projecto[]>{
        return await this.projectoModel.find({estado:"aprobado"})
    }
    async createProjecto(dto:CreateProjectosDto):Promise<Projecto>{
        const projecto = new this.projectoModel(dto)
        return await projecto.save()
    }
    async getOneProjecto(id:string):Promise<Projecto> {
        return await this.projectoModel.findById(id)
    }
    
    async getSearch(nombreProyecto:string){
        return await this.projectoModel.find({ nombreProyecto: { $regex: nombreProyecto } })
    }

  
    async getProjectosInscritos():Promise<Projecto[]>{
        return await this.projectoModel.find({estado:'false'})
    }

    async updateProjectoInscrito(id:string){
        const filter = { _id: Object(id) };
        const update = {estado:"aprobado"};
        let doc = await this.projectoModel.findOneAndUpdate(filter, update, {
            new: true
        });
        return doc
    }

    async desactivarProyecto(id:string){
        const filter = { _id: Object(id) };
        const update = {estado:"true"};
        let doc = await this.projectoModel.findOneAndUpdate(filter, update, {
            new: true
        });
        return doc
    }

    
    async deleteProjectoInscrito(id:string){
        const filter = { _id: Object(id) };
        let doc = await this.projectoModel.deleteOne(filter);
        return doc
    }

}

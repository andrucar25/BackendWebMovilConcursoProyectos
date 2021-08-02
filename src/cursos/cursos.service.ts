import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cursos } from './interfaces/cursos.interface';
import { CreateCursoDto } from './dto/cursos.dto'
@Injectable()
export class CursosService {
    constructor(
        @InjectModel('Cursos') private cursosModel:Model<Cursos>
    ){}

    async getCursos():Promise<Cursos[]> {
        return await this.cursosModel.find();
    }
    async createOne(createCursoDto:CreateCursoDto):Promise<Cursos>{
        const curso = new this.cursosModel(createCursoDto);
        return await curso.save()
    }
    async getCoursesByCicle(ciclo:string){

        const data = await this.cursosModel.find({ciclo:ciclo})   
        if(data.length==0){
            return {data:[],message:"Not found",status:404}
        }
        return data
    }
}

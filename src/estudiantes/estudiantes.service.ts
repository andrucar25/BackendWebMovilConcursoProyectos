import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEstudianteDto } from './dto/estudiantes.dto';
import { Estudiantes } from './interfaces/estudiantes.interface';

@Injectable()
export class EstudiantesService {
    constructor(@InjectModel('Estudiantes') private modelEstudiantes:Model<Estudiantes>){}

    async getEstudiantes():Promise<Estudiantes[]>{
        return await this.modelEstudiantes.find();        
    }
    
    async createEstudiante(dto:CreateEstudianteDto):Promise<Estudiantes>{
        const estudiante = new this.modelEstudiantes(dto)
        return await estudiante.save();
    }
    async getEstudiante(codigo:number):Promise<Estudiantes>{
        return await this.modelEstudiantes.findOne({codigo:codigo})            
    }
    async findOne(codigo: number): Promise<Estudiantes | undefined> {
        console.log(codigo)
        const user = await this.modelEstudiantes.findOne({codigo:codigo});
        console.log(user)
        return user;
      }
}

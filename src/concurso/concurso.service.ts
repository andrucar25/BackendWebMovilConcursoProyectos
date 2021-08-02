import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model } from 'mongoose';
import { CreateConcursoDto } from './dto/concurso.dto';
import { Concurso } from './interfaces/concurso.interface';

@Injectable()
export class ConcursoService {
    constructor(
        @InjectModel('Concursos') private concursosModel:Model<Concurso>
        ){}
        
        async getConcursos():Promise<Concurso[]>  {
            return await this.concursosModel.find()
        }
        async createConcurso(createConcursoDto:CreateConcursoDto):Promise<Concurso>{
            const curso = new this.concursosModel(createConcursoDto);
            return await curso.save()
        }
        async updateConcurso(id:string,dto:CreateConcursoDto){
            const filter = { _id: id };
            const update = dto;
            
            // `doc` is the document _after_ `update` was applied because of
            // `new: true`
            let doc = await this.concursosModel.findOneAndUpdate(filter, update, {
                new: true
            });
            return doc
        }
        async activeConcurso():Promise<Concurso>{
            return await this.concursosModel.findOne({"estado":true})
        }
        async desactiveConcurso(id:string){
            const filter={_id:id}
            const update = {"estado":false}
            let doc = await this.concursosModel.findOneAndUpdate(filter, update, {
                new: true
            });
            return doc
            
        }
    }
    
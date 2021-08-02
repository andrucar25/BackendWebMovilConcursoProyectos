import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { promises } from 'dns';
import { Model } from 'mongoose';
import { CreateUsuariosDto } from './dto/usuarios.dto';
import { Usuarios } from './interfaces/usuarios.interface';
export type User = any;

@Injectable()
export class UsuariosService {
    constructor(@InjectModel('Usuarios') private readonly usuarioModel:Model<Usuarios>){}
    async findOne(codigo: number): Promise<Usuarios | undefined> {
      console.log(codigo)
      const user = await this.usuarioModel.findOne({codigo:codigo});
      console.log(user)
      return user;
    }
    async createOne(dto:CreateUsuariosDto):Promise<Usuarios> {
      const user =  new this.usuarioModel(dto)
      return await user.save()
    }
    async findUsuario():Promise<Usuarios[]>{
      return await this.usuarioModel.find()
    }
}

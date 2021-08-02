import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuarios } from 'src/usuarios/interfaces/usuarios.interface';


@Injectable()
export class AuthRepository{
    constructor(@InjectModel('Usuarios') private userModel:Model<Usuarios>){}
    

}
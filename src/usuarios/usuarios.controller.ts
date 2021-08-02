import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUsuariosDto } from './dto/usuarios.dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly serviceusuario:UsuariosService ){}

    @Post("/")
    async createusuario(@Body() dto:CreateUsuariosDto){
        console.log(dto)
        return this.serviceusuario.createOne(dto)
    }
    @Get("/")
    async getUsuario(){
        return this.serviceusuario.findUsuario()
    }
}
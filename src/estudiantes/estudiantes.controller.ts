import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/estudiantes.dto';
import { EstudiantesService } from './estudiantes.service';

@Controller('estudiantes')
export class EstudiantesController{
    constructor(private estudianteService: EstudiantesService ){}
    @Get('/')
    getMany(){        
        return this.estudianteService.getEstudiantes()
    }
    @Post('/')
    createOne(@Body() dto:CreateEstudianteDto){
        return this.estudianteService.createEstudiante(dto)
    }
    @Get('/:codigo')
    getOne(@Param('codigo',ParseIntPipe) codigo:number) {
        console.log(codigo)
        return this.estudianteService.getEstudiante(codigo)
    }    
}

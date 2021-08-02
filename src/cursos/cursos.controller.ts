import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/cursos.dto';

@Controller('cursos')
export class CursosController {
    constructor(private cursoService:CursosService){}
    @Get('/')
    getMany() {
        return this.cursoService.getCursos()
    }

    @Post('/')
    createOne(@Body() dto:CreateCursoDto) {
        return this.cursoService.createOne(dto)
    }

    @Get('/:ciclo')
    getManyByCicle(@Param('ciclo') ciclo:string){
        console.log(ciclo)
        return this.cursoService.getCoursesByCicle(ciclo)
    }
}

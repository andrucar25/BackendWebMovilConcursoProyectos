import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ConcursoService } from './concurso.service';
import { CreateConcursoDto } from './dto/concurso.dto';

@Controller('concurso')
export class ConcursoController {
    constructor(private concursoService:ConcursoService){}
    @Get('/')
    getMany(){
        return this.concursoService.getConcursos()
    }
    @Post('/')
    createOne(@Body() dto:CreateConcursoDto) {
        return this.concursoService.createConcurso(dto)
    }
    @Put(':id/update')
    createCategory(@Param('id') id:string, @Body() dto:CreateConcursoDto){
        console.log(id)
        console.log(dto)
        return this.concursoService.updateConcurso(id,dto)
    }
    @Get('/active')
    getActive(){
        return this.concursoService.activeConcurso()
    }
    @Put(':id/desactivar')
    desactiveConcurso(@Param('id') id:string){
        return this.concursoService.desactiveConcurso(id)
    }
}

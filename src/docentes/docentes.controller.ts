import { Body, Controller, Get, Post } from '@nestjs/common';
import { DocentesService } from './docentes.service';
import { CreateDocentesDto } from './dto/docentes.dto';

@Controller('docentes')
export class DocentesController {
    constructor(private docenteService: DocentesService){}
    @Get('/')
    getMany(){
        return this.docenteService.getDocentes()
    }
    @Post('/')
    createOne(@Body() dto:CreateDocentesDto){
        return this.docenteService.CreateDocente(dto);
    }
}


import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateResultado } from './dto/resultado.dto';
import {ResultadoService} from './resultado.service'

@Controller('resultado')
export class ResultadoController {
    constructor(private readonly resultadoService: ResultadoService){}
    @Get('/')
    getResultado(){
        return this.resultadoService.getResultado()
    }

    @Post('/')
    createResultado(@Body() dto:CreateResultado){
        return this.resultadoService.createResultado(dto)
    }
}


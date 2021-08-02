import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreatePlagioDto } from './dto/plagio.dto';
import { PlagioService } from './plagio.service';

@Controller('plagio')
export class PlagioController {
    constructor(private readonly plagioService:PlagioService){}

    @Get("/")
    getPlagios(){
        return this.plagioService.getPlagios()
    }
    @Post("/")
    createPlagio(@Body() dto:CreatePlagioDto){
        return this.plagioService.createPlagio(dto)
    }

    @Get('id/:id')
    getOne(@Param('id') id:string) {
        const plagio = this.plagioService.getOnePlagio(id)
        if(!plagio) throw new NotFoundException('No se encontro el proyecto');
        return plagio;
    }
}
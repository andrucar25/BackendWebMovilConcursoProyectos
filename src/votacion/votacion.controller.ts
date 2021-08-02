import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateVotacion } from './dto/votacion.dto';
import {VotacionService} from './votacion.service'

@Controller('votacion')
export class VotacionController {
    constructor(private readonly votacionService: VotacionService){}
    @Get('/')
    getVotacion(){
        return this.votacionService.getVotacion()
    }
    @Get('/proyecto/:id')
    getVotacionByProyecto(@Param('id') id:string){
        return this.votacionService.getVotacionProyectoId(id)
    }

    @Get('/:id')
    getOne(@Param('id') id:string) {
        const votacion = this.votacionService.getOneVotacion(id)
        if(!votacion) throw new NotFoundException('No se encontro el proyecto');
        return votacion;
    }

    @Post('/')
    createVotacion(@Body() dto:CreateVotacion){
        return this.votacionService.createVotacion(dto)
    }
}

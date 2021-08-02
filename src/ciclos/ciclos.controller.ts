import { Body, Controller, Get, NotFoundException, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CiclosService } from './ciclos.service';
import { CreateCicloDto } from './dto/ciclos.dto';

@Controller('ciclos')
export class CiclosController {
    constructor(private cicloService:CiclosService){}
    // @UseGuards(JwtAuthGuard)
    @Get('/')
    getMany() {
        return this.cicloService.getCiclos()
    }

    @Get('/:id')
    getOne(@Param('id') id:string) {
        const ciclo = this.cicloService.getOneCiclo(id)
        if(!ciclo) throw new NotFoundException('No se encontro el documento');
        return ciclo;
    }
    
    @Post('/')
    createOne(@Body() dto:CreateCicloDto) {
        return this.cicloService.createCiclo(dto);
    }


}

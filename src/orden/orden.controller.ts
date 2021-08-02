import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateOrdenDto } from './dto/orden.dto';
import { OrdenService } from './orden.service';

@Controller('orden')
export class OrdenController {
    constructor(private ordenService: OrdenService){}
    @Get('/:id')
    getMany(@Param('id') id:string){
        return this.ordenService.getOrden(id)
    }
    @Post('/')
    createOne(@Body() dto:CreateOrdenDto){
        return this.ordenService.CreateOrden(dto);
    }
    @Put('/estado/:id/:estado')
    actualizarEstado(@Param('id') id:string, @Param('estado') estado:string){
        return this.ordenService.updateEstado(id,estado)
    }
}

import { Module } from '@nestjs/common';
import { from } from 'rxjs';
import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';
import { OrdenSchema } from './entities/orden.schema'
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[MongooseModule.forFeature([
    {name:'Orden',schema:OrdenSchema}
  ])],
  controllers: [OrdenController],
  providers: [OrdenService]
})
export class OrdenModule {}

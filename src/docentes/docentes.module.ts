import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocentesController } from './docentes.controller';
import { DocentesService } from './docentes.service';
import { DocentesSchema } from './entities/docentes.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Docentes',schema:DocentesSchema}
  ])],
  controllers: [DocentesController],
  providers: [DocentesService]
})
export class DocentesModule {}

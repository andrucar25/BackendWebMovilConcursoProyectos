import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { CursoSchema } from './entities/cursos.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Cursos',schema:CursoSchema}
  ])],
  controllers: [CursosController],
  providers: [CursosService]
})
export class CursosModule {}

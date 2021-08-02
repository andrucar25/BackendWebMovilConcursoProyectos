import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConcursoController } from './concurso.controller';
import { ConcursoService } from './concurso.service';
import { ConcursoSchema } from './entities/concurso.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Concursos',schema:ConcursoSchema}
  ])],
  controllers: [ConcursoController],
  providers: [ConcursoService]
})
export class ConcursoModule {}

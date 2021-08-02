import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstudianteSchema } from './entities/estudiante.schema';
import { EstudiantesController } from './estudiantes.controller';
import { EstudiantesService } from './estudiantes.service';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Estudiantes',schema:EstudianteSchema}
  ])],
  controllers: [EstudiantesController],
  providers: [EstudiantesService],
  exports:[EstudiantesService]
})
export class EstudiantesModule {}

import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EstudiantesModule } from 'src/estudiantes/estudiantes.module';
import { ProjectSchema } from './entities/projecto.entity';
import { ProjectosController } from './projectos.controller';
import { ProjectosService } from './projectos.service';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Projectos',schema:ProjectSchema}
  ]),HttpModule],
  controllers: [ProjectosController],
  providers: [ProjectosService]
})
export class ProjectosModule {}

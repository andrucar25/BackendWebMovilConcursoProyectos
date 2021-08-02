import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultadoSchema } from './entities/resultado.schema';
import { ResultadoController } from './resultado.controller';
import { ResultadoService } from './resultado.service';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Resultados',schema:ResultadoSchema}
  ]),HttpModule],
  controllers: [ResultadoController],
  providers: [ResultadoService]
})
export class ResultadoModule {}

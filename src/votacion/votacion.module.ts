import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VotacionSchema } from './entities/votacion.schema';
import { VotacionController } from './votacion.controller';
import { VotacionService } from './votacion.service';

@Module({
  imports:[MongooseModule.forFeature([
    {name:'Votacion',schema:VotacionSchema}
  ]),HttpModule],
  controllers: [VotacionController],
  providers: [VotacionService]
})
export class VotacionModule {}

import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlagioController } from './plagio.controller';
import { PlagioService } from './plagio.service';
import { PlagioSchema } from './entities/plagio.schema'
@Module({
  imports:[MongooseModule.forFeature([
    {name:'Plagio',schema:PlagioSchema}
  ]),HttpModule],
  controllers: [PlagioController],
  providers: [PlagioService]
})
export class PlagioModule {}

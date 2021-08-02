import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CiclosController } from './ciclos.controller';
import { CiclosService } from './ciclos.service';
import { CicloSchema } from './entities/ciclo.schema'
@Module({
  imports:[MongooseModule.forFeature([
    {name:'Ciclos',schema:CicloSchema}
  ])],
  controllers: [CiclosController],
  providers: [CiclosService]
})
export class CiclosModule {}

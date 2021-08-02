import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './cursos/cursos.module';
import { CiclosModule } from './ciclos/ciclos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DocentesModule } from './docentes/docentes.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { AuthModule } from './auth/auth.module';
import { ProjectosModule } from './projectos/projectos.module';
import { ConcursoModule } from './concurso/concurso.module';
import { PlagioModule } from './plagio/plagio.module';
import { OrdenModule } from './orden/orden.module';
import { VotacionModule } from './votacion/votacion.module';
import { ResultadoModule } from './resultado/resultado.module';
@Module({
  imports: [CursosModule, CiclosModule,MongooseModule.forRoot('mongodb+srv://test:test@episupt.tasga.gcp.mongodb.net/concurso?retryWrites=true&w=majority'), UsuariosModule, DocentesModule, EstudiantesModule, AuthModule, ProjectosModule, ConcursoModule, PlagioModule, OrdenModule, VotacionModule, ResultadoModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

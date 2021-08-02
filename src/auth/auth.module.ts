import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/localstrategy';
import { JwtStrategy } from './strategies/jwtstrategy';
import { EstudiantesModule } from 'src/estudiantes/estudiantes.module';


@Module({
  imports:[UsuariosModule,PassportModule.register({ defaultStrategy: 'jwt' }),JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60h' },
  }),],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  controllers: [AuthController],
  exports:[AuthService]
})
export class AuthModule {}

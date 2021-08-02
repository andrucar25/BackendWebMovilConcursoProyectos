import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EstudiantesService } from 'src/estudiantes/estudiantes.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { RegisterUserDto } from './dto/register.dto';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuariosService,
    private jwtService: JwtService
    ) {}
    
    async validateUser(codigo: number, contrasenia: string): Promise<any> {
      //PRIMERO PASA POR LOCAL STRATEGY ASI QUE MI SOLUCION DE HACERLO CON VARIAS COLECCIONES
      //SERIA QUE NECESITO PASAR OTRA PROP POR LOS FIELDS O GG
      const user = await this.usersService.findOne(codigo);
      if (user && user.contrasenia === contrasenia) {
        const { contrasenia, ...result } = user;
        return result;
      }
      return null;
    }
    
    async login(user: any) {      
      console.log("ES EL USUARIO AEA")
      console.log(user._doc._id)

      const payload = { codigo: user._doc.codigo,idUser:user._doc._id,nombres:user._doc.nombres,apellidos:user._doc.apellidos,rol:user._doc.rol};
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

    // async Register(dto:RegisterUserDto) {
    //   return await this.usersService.createOne(dto)
    // }
  }
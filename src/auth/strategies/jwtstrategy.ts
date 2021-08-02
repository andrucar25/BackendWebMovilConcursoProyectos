import { Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ExtractJwt } from 'passport-jwt';
import { jwtConstants } from '../constants';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }
  //EN ESTA PARTE ARMAS EL PAYLOAD
  async validate(payload: any) {
    return { id:payload.idUser, codigo: payload.codigo,nombres:payload.nombres,apellidos:payload.apellidos,rol:payload.rol };
  }
}
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { IMaster } from "src/master/interfaces/master.interface";
import { TokenService } from "src/token/token.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly tokenService: TokenService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get<string>('JWT_SECRET'),
            passReqToCallback: true
        });
    }

    async validate(req, user: Partial<IMaster>) {
        const token = req.headers.authorization.slice(7);
        const tokenExists = await this.tokenService.exists(user._id, token);
        if (tokenExists) {
            return user;
        } else {
            throw new UnauthorizedException('Токена нету');
        }
    }
}
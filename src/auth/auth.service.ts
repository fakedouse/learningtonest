import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignOptions } from 'jsonwebtoken';
import { CreateMasterDto } from 'src/master/dto/create-master.dto';
import { IMaster } from 'src/master/interfaces/master.interface';
import { MasterService } from 'src/master/master.service';
import { CreateUserTokenDto } from 'src/token/dto/create-user.dto';
import { TokenService } from 'src/token/token.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly masterService: MasterService,
        private readonly tokenService: TokenService
    ) {}

    async signUp(createUserDto: CreateMasterDto): Promise<boolean> {
        const user = await this.masterService.create(createUserDto, [roleEnum.user]);
        await this.sendConfirmation(user);
        return true;
    }

    async signIn({email, password}: SignInDto): Promise<IReadableUser> {
        const user = await this.masterService.findByEmail(email);

        if (user && (await bcrypt.compare(password, master.password))) {
            const token = await this.signUser(user);
            const readableUser = user.toObject() as IReadableUser;
            readableUser.accessToken = token;

            return _.omit<any>(readableUser, Object.values(userSensitiveFieldsEnum)) as IReadableUser;
        }
        throw new BadRequestException('Invalid credentials');
    }

    async changePassword(userId: string, changePasswordDto: ChangePasswordDto): Promise<boolean> {
        const password = await this.masterService.hashPassword(changePasswordDto.password);

        await this.userService.update(userId, {password});
        await this.tokenService.deleteAll(userId);
        return true;
    }

    private async generateToken(data, options?: SignOptions): Promise<string> {
        return this.jwtService.sign(data, options);
    }

    private async verifyToken(token): Promise<any> {
        try {
            const data = this.jwtService.verify(token);
            const tokenExists = await this.tokenService.exists(data._id, token);

            if (tokenExists) {
                return data;
            }
            throw new UnauthorizedException();
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    private async saveToken(createMasterTokenDto: CreateUserTokenDto) {
        const masterToken = await this.tokenService.create(createMasterTokenDto);
        return masterToken;
    }

    async confirm(token: string): Promise<IMaster> {
        const data = await this.verifyToken(token);
        const master = await this.masterService.find(data._id);

        await this.tokenService.delete(data._id, token);

        if (master && master.status === statusEnum.pending) {
            master.status = statusEnum.active;
            return user.save();
        }
        throw new BadRequestException('Confirmation error');
    }

}

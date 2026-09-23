import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private jtwService: JwtService
    ) { }
    async login(loginDto: LoginDto) {
        const result = await this.userService.login(loginDto.email, loginDto.password);
        const payload = { email: result?.email, sub: result.userId }
        return { token : this.jtwService.sign(payload) }
    }
}

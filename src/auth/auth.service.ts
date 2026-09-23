import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private jtwService: JwtService
    ) { }
    public async login(loginDto: LoginDto) {
        const result = await this.userService.login(loginDto.email, loginDto.password);
        const payload = { email: result?.email, sub: result.userId }
        return { token : this.jtwService.sign(payload) }
    }
    public async sighnUp(request: CreateUserDto) {
        const result =  await this.userService.sighnUp(request);
        const payload = { email: result.email, sub: result.userId };
        return { token: this.jtwService.sign(payload) };
    }
}

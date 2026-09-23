import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  public async login(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
  @Post('/signup')
  public async sighnUp(@Body() request: CreateUserDto) {
    return await this.authService.sighnUp(request);
  }
  
}

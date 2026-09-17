import { Injectable } from '@nestjs/common';
import { LoginDto } from './dto/login.dto'; 
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
}

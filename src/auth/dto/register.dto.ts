import {
    IsEmail,
    IsEnum,
    IsString,
    MinLength,
} from 'class-validator';

export enum UserRole {
    CUSTOMER = 'CUSTOMER',
    COOK = 'COOK',
    ADMIN = 'ADMIN',
}

export class RegisterDto {
    @IsString()
    name!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @MinLength(8)
    password!: string;

    @IsString()
    phone!: string;

    @IsEnum(UserRole)
    role!: UserRole;
}
import { PartialType } from '@nestjs/mapped-types';
import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';

export enum UserRole {
    CUSTOMER = 'CUSTOMER',
    COOK = 'COOK',
    ADMIN = 'ADMIN',
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @MinLength(8)
    password!: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
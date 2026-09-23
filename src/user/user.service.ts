import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceNotFound } from 'src/exeptions/ResourceNotFound';
import { UserDocument } from 'src/schemas/User.schema';
import * as bcrypt from 'bcrypt';
import { Payload } from 'src/Types/paylaod';
import { CreateUserDto } from './user.dto';
import { ResurceExists } from 'src/exeptions/ResurceExists';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user') private readonly userModel: Model<UserDocument>
    ) { }

    public async login(email: string, password: string): Promise<Payload> {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new ResourceNotFound(`User with email ${email} not found or password is incorrect`, 404);
        }
        const isValidated = await bcrypt.compare(password, user.passwordHash);
        if (!isValidated) {
            throw new ResourceNotFound(`User with email ${email} not found or password is incorrect`, 404);
        }
        const payload: Payload = {
            userId: user._id.toString(),
            email: user.email,
            role: user.role
        };

        return payload;
    }
    public async sighnUp(request: CreateUserDto): Promise<Payload> {
        const user = await this.userModel.findOne({ email: request.email });
        if (user) {
            throw new ResurceExists(`uesr with email ${request.email} alredy exist`);
        }
        const newUser = await this.userModel.create({
            passwordHash: await bcrypt.hash(request.password, 10),
            ...request
        })
        const payload = {
            userId: newUser._id.toString(),
            email: newUser.email,
            role: newUser.role
        };
        return payload ;
    }
}

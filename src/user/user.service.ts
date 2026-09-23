import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResourceNotFound } from 'src/exeptions/ResourceNotFound';
import { UserDocument } from 'src/schemas/User.schema';
import * as bcrypt from 'bcrypt';
import { Payload } from 'src/Types/paylaod';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user') private readonly userModel: Model<UserDocument>
    ) { }

    public async login(email: string, password: string): Promise<Payload | null> {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new ResourceNotFound(`User with email ${email} not found or password is incorrect`, 404);
        }
        const isValidated = await bcrypt.compare(password, user.passwordHash);
        if (!isValidated) {
            throw new ResourceNotFound(`User with email ${email} not found or password is incorrect`, 404);
        }
        const payload: Payload =  {
            userId: user._id.toString(),
            email: user.email,
            role: user.role
        };

        return payload;
    }
}

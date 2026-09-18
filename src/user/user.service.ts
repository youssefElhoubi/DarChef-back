import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/schemas/User.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('user') private readonly userModel: Model<UserDocument>
    ) { }
    public async login(email: string, password: string): Promise<UserDocument | null> {
        const user = await this.userModel.findOne({ email, password }).exec();
        if (!user) {
            throw new 
        }
        return user;
    }
}

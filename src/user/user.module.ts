import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/User.schema';

@Module({
    imports: [UserService,
        MongooseModule.forFeature([{ name: "user", schema: UserSchema }])
    ],
    exports: [UserService],
})
export class UserModule { }

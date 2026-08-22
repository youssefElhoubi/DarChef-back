import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name!: string;
  
  @Prop({ required: true })
  email!: string;

  @Prop({ required: true })
  passwordHash!: string;

  @Prop()
  phone!: string;

  @Prop({
    required: true,
    enum: ['CUSTOMER', 'COOK', 'ADMIN'],
    default: 'CUSTOMER',
  })
  role!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

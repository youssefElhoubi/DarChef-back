import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './User.schema';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
  user_ID!: mongoose.Types.ObjectId;
  @Prop({
    type: [
      {
        type: {
          type: String,
          enum: ['Point'],
          required: true,
        },
        coordinates: {
          type: [Number],
          required: true,
        },
      },
    ],
  })
  savedAddresses!: {
    type: 'Point';
    coordinates: [number, number];
  }[];

  @Prop({ type: [String], default: [] })
  dietaryPreferences!: string[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

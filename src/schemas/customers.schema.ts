import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
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

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';

export type CookDocument = HydratedDocument<Cook>;

@Schema()
export class Cook {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: "User" })
    user_ID!: mongoose.Types.ObjectId;
  @Prop({
    type: [Types.ObjectId],
    ref: 'Equipment',
    default: [],
  })
  equipmentList!: Types.ObjectId[];

  @Prop({
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  })
  kitchenLocation!: {
    type: 'Point';
    coordinates: [number, number];
  };

  @Prop({ default: false })
  aiVerified!: boolean;

  @Prop({ default: 0, min: 0, max: 5 })
  averageRating!: number;
}


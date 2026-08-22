import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CookDocument = HydratedDocument<Cook>;

@Schema()
export class Cook {
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


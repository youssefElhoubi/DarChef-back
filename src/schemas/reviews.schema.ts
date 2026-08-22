import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop({
    type: Types.ObjectId,
    ref: 'Order',
    required: true,
    unique: true,
  })
  orderId!: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  customerId!: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  cookId!: Types.ObjectId;

  @Prop({
    type: Number,
    required: true,
    min: 1,
    max: 5,
  })
  rating!: number;

  @Prop()
  comment?: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  createdAt!: Date;
}

export const ReviewSchema =
  SchemaFactory.createForClass(Review);
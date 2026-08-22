import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
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
    required: true,
  })
  mealDescription!: string;

  @Prop({
    type: Number,
    required: true,
    min: 0,
  })
  price!: number;

  @Prop({
    required: true,
    enum: [
      'PENDING',
      'ACCEPTED',
      'PREPARING',
      'READY',
      'DELIVERING',
      'DELIVERED',
      'CANCELLED',
    ],
    default: 'PENDING',
  })
  status!: string;

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
  deliveryCoordinates!: {
    type: 'Point';
    coordinates: [number, number];
  };
}

export const OrderSchema =
  SchemaFactory.createForClass(Order);
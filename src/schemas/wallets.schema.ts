import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TransactionDocument =
  HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop({
    type: Types.ObjectId,
    ref: 'Wallet',
    required: true,
  })
  walletId!: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Order',
  })
  orderId?: Types.ObjectId;

  @Prop({
    type: Number,
    required: true,
    min: 0,
  })
  amount!: number;

  @Prop({
    type: String,
    required: true,
    enum: [
      'DEPOSIT',
      'WITHDRAWAL',
      'PAYMENT',
      'REFUND',
      'ESCROW',
      'RELEASE',
    ],
  })
  type!: string;

  @Prop({
    type: Date,
    default: Date.now,
  })
  timestamp!: Date;
}

export const TransactionSchema =
  SchemaFactory.createForClass(Transaction);
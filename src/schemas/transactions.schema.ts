import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type TransactionsDocument = HydratedDocument<Transactions> ;

@Schema()
export class Transactions {
  @Prop({ required: true })
  name: string;
}

export const TransactionsSchema = SchemaFactory.createForClass(Transactions);

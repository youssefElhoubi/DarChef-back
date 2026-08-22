import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type OrdersDocument = HydratedDocument<Orders> ;

@Schema()
export class Orders {
  @Prop({ required: true })
  name: string;
}

export const OrdersSchema = SchemaFactory.createForClass(Orders);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type CustomersDocument = HydratedDocument<Customers> ;

@Schema()
export class Customers {
  @Prop({ required: true })
  name: string;
}

export const CustomersSchema = SchemaFactory.createForClass(Customers);

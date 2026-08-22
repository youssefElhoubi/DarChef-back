import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type CooksDocument = HydratedDocument<Cooks> ;

@Schema()
export class Cooks {
  @Prop({ required: true })
  name: string;
}

export const CooksSchema = SchemaFactory.createForClass(Cooks);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type WalletsDocument = HydratedDocument<Wallets> ;

@Schema()
export class Wallets {
  @Prop({ required: true })
  name: string;
}

export const WalletsSchema = SchemaFactory.createForClass(Wallets);

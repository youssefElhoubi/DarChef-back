import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type EquipmentDocument = HydratedDocument<Equipment> ;

@Schema()
export class Equipment {
  @Prop({ required: true })
  name: string;
}

export const EquipmentSchema = SchemaFactory.createForClass(Equipment);

import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Attempt extends AbstractDocument {
  @Prop({ required: true })
  musicName: string;

  @Prop({ required: true })
  audioUrl: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: string;
}

export const AttemptSchema = SchemaFactory.createForClass(Attempt);

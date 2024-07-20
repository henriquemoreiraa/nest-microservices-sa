import { AbstractDocument } from '@app/common/database/abstract.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({ versionKey: false })
export class User extends AbstractDocument {
  @Prop({ unique: true, required: true })
  username: string;

  @Prop()
  password: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Attempt' }] })
  attempts: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);

import { Module } from '@nestjs/common';
import { AttemptController } from './controller/attempt.controller';
import { AttemptService } from './service/attempt.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '@app/common/database/database.module';
import { Attempt, AttemptSchema } from './schemas/attempt.schema';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { AttemptRepository } from './attempt.repository';
import { AuthModule } from '@app/common/auth/auth.module';
import { User, UserSchema } from '@app/common/auth/schemas/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        MONGODB_URI: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Attempt.name, schema: AttemptSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AuthModule,
  ],
  controllers: [AttemptController],
  providers: [AttemptService, AttemptRepository],
})
export class AttemptModule {}

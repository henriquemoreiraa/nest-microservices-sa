import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@app/common/database/base.repository';
import { User } from '@app/common/auth/schemas/user.schema';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  protected readonly logger = new Logger(UserRepository.name);

  constructor(@InjectModel(User.name) private userModel: Model<User>) {
    super(userModel);
  }
}

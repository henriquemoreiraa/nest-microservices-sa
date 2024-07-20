import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from '@app/common/database/base.repository';
import { Attempt } from './schemas/attempt.schema';
import { User } from '@app/common/auth/schemas/user.schema';

@Injectable()
export class AttemptRepository extends BaseRepository<Attempt> {
  protected readonly logger = new Logger(AttemptRepository.name);

  constructor(
    @InjectModel(Attempt.name) attemptModel: Model<Attempt>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {
    super(attemptModel);
  }

  async pushAttemptToUser(attempt: Attempt, user: User) {
    const findUser = this.userModel.findOne({ _id: user._id });

    await findUser.updateOne({
      $push: {
        attempts: attempt._id,
      },
    });
  }
}

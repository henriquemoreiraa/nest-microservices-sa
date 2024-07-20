import { User } from '@app/common/auth/schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { Attempt } from '../schemas/attempt.schema';
import { AttemptRepository } from '../attempt.repository';

@Injectable()
export class AttemptService {
  constructor(private readonly attemptRepository: AttemptRepository) {}

  getAttempts(user: User): Promise<Attempt[]> {
    return this.attemptRepository.find({ user: user._id });
  }

  getAttemptById(id: string, user: User): Promise<Attempt> {
    return this.attemptRepository.findOne({ _id: id, user: user._id });
  }

  async createAttempt(createAttemptDto: any, user: User): Promise<Attempt> {
    const attempt = await this.attemptRepository.create({
      ...createAttemptDto,
      user: user._id,
    });

    await this.attemptRepository.pushAttemptToUser(attempt, user);

    return attempt;
  }
}

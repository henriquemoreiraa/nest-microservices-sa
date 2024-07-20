import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AttemptService } from '../service/attempt.service';
import { CurrentUser } from '@app/common/auth/get-user.decorators';
import { User } from '@app/common/auth/schemas/user.schema';
import { Attempt } from '../schemas/attempt.schema';
import { AuthGuard } from '@app/common/auth/jwt-auth.guard';

@Controller('attempts')
export class AttemptController {
  constructor(private readonly attemptService: AttemptService) {}

  @Get()
  @UseGuards(AuthGuard)
  getAttempts(@CurrentUser() user: User): Promise<Attempt[]> {
    return this.attemptService.getAttempts(user);
  }

  @Get('/:id')
  @UseGuards(AuthGuard)
  getAttemptById(
    @Param('id') id: string,
    @CurrentUser() user: User,
  ): Promise<Attempt> {
    return this.attemptService.getAttemptById(id, user);
  }

  @Post()
  @UseGuards(AuthGuard)
  createAttempt(
    @Body() createAttemptDto: any,
    @CurrentUser() user: User,
  ): Promise<Attempt> {
    return this.attemptService.createAttempt(createAttemptDto, user);
  }
}

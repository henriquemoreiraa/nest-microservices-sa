import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { CurrentUser } from '@app/common/auth/get-user.decorators';
import { User } from '@app/common/auth/schemas/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto) {
    return this.authService.signIn(authCredentialsDto);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('validate_user')
  async validateUser(@CurrentUser() user: User) {
    return user;
  }
}

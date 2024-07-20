import {
  Injectable,
  InternalServerErrorException,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from '../dto/auth-credentials.dto';
import { JwtPayload } from '../jwt-payload.interface';
import { UserRepository } from '../user.repository';

@Injectable()
export class AuthService {
  private readonly logger = new Logger();

  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;

    try {
      const salt = bcrypt.genSaltSync();
      const hashedPassword = await bcrypt.hash(password, salt);

      await this.userRepository.create({
        username,
        password: hashedPassword,
        attempts: [],
      });
    } catch (error) {
      this.logger.error('Error creating user', error.stack);
      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async signIn(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;

    try {
      const user = await this.userRepository.findOne({ username });

      if (await bcrypt.compare(password, user.password)) {
        const payload: JwtPayload = { username };
        const accessToken = this.jwtService.sign(payload);

        return { accessToken };
      }
    } catch {
      throw new UnauthorizedException('Please check you login credentials');
    }
  }
}

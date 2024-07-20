import { NestFactory } from '@nestjs/core';
import { AttemptModule } from './attempt.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AttemptModule);

  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const PORT = configService.get('PORT');

  console.log(`Running on PORT ${PORT}`);
  await app.listen(PORT);
}
bootstrap();

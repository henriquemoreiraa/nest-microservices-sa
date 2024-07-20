import { IsNotEmpty } from 'class-validator';

export class CreateAttemptDto {
  @IsNotEmpty()
  musicName: string;

  @IsNotEmpty()
  audioUrl: string;
}

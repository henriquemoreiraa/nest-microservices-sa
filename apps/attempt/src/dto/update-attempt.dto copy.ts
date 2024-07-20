import { IsNotEmpty } from 'class-validator';

export class UpdateAttemptDto {
  @IsNotEmpty()
  musicName: string;

  @IsNotEmpty()
  audioUrl: string;
}

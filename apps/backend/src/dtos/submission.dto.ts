import { IsNotEmpty, IsString, Length } from 'class-validator';

export class SubmitDto {
  @IsString()
  @IsNotEmpty()
  public beforeImage: string;

  @IsString()
  @IsNotEmpty()
  public afterImage: string;

  @IsString()
  @IsNotEmpty()
  @Length(42, 42) // 42 is the length of a VeChain address including the 0x prefix
  public address: string;

  @IsString()
  @IsNotEmpty()
  public deviceID: string;
}

import { IsString } from 'class-validator';

export class UserVoucherDto {
    @IsString()
    reward_name: string;

    @IsString()
    qrcode: string;
}

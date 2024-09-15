import { IsString } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    first_name: string;

    @IsString()
    last_name: string;

    @IsString()
    profile_imgurl: string;
}

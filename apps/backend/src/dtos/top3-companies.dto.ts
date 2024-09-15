import { IsString, IsNumber } from 'class-validator';

export class Top3CompaniesDto {
    @IsString()
    name: string;

    @IsString()
    profile_imgurl: string;

    @IsNumber()
    contributionCount: number;
}

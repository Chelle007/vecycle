import { IsString } from 'class-validator';

export class CreateContributionDto {
    @IsString()
    company_id: string;

    @IsString()
    user_id: string;

    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    before_imgurl: string;

    @IsString()
    after_imgurl: string;
}

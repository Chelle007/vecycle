import { IsDecimal, IsString } from 'class-validator';

export class MilestoneDto {
    @IsDecimal()
    token_to_reach: number;

    @IsString()
    rewardName: string;
}

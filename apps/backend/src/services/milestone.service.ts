import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Milestone } from '../entities/milestone.entity';
import { MilestoneDto } from '../dtos/milestone.dto';

@Injectable()
export class MilestoneService {
    constructor(
        @InjectRepository(Milestone)
        private readonly milestoneRepository: Repository<Milestone>,
    ) { }

    async getMilestonesByCompanyId(companyId: string): Promise<MilestoneDto[]> {
        const milestones = await this.milestoneRepository.find({
            where: { company_id: companyId },
            order: { token_to_reach: 'ASC' },
        });

        if (!milestones.length) {
            throw new NotFoundException(`No milestones found for company with ID ${companyId}`);
        }

        return milestones.map(milestone => ({
            token_to_reach: milestone.token_to_reach,
            rewardName: milestone.reward_name,
        }));
    }
}

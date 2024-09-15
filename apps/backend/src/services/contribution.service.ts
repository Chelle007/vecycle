import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contribution } from '../entities/contribution.entity';
import { CreateContributionDto } from '../dtos/create-contribution.dto';
import { Top3CompaniesDto } from '@/dtos/top3-companies.dto';

@Injectable()
export class ContributionService {
    constructor(
        @InjectRepository(Contribution)
        private readonly contributionRepository: Repository<Contribution>,
    ) { }

    // async createContribution(createContributionDto: CreateContributionDto): Promise<Contribution> {
    //     const defaultProfileImgUrl = '/public/images/default-profpic.png';

    //     const contribution = this.contributionRepository.create({
    //         ...CreateContributionDto,
    //         profile_imgurl: defaultProfileImgUrl
    //     });

    //     return this.contributionRepository.save(contribution);
    // }

    async getUserTop3Contribution(userId: string): Promise<Top3CompaniesDto[]> {
        const result = await this.contributionRepository
            .createQueryBuilder('contribution')
            .select('company.id', 'companyId')
            .addSelect('company.name', 'companyName')
            .addSelect('company.profile_imgurl', 'companyProfileImgUrl')
            .addSelect('COUNT(contribution.id)', 'contributionCount')
            .innerJoin('contribution.company', 'company')
            .where('contribution.user = :userId', { userId })
            .andWhere('contribution.is_deleted = false')
            .groupBy('company.id')
            .orderBy('COUNT(contribution.id)', 'DESC')
            .limit(3)
            .getRawMany();

        const topCompanies: Top3CompaniesDto[] = result.map(record => ({
            name: record.companyName,
            profile_imgurl: record.companyProfileImgUrl,
            contributionCount: +record.contributionCount,
        }));

        return topCompanies;
    }

    async getUserDashboard(userId: string): Promise<string> {
        const dashboardImgUrl = '/public/images/' + userId + '-dashboard.png';
        return dashboardImgUrl;
    }
}

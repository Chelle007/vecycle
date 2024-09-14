import { Request, Response, NextFunction } from 'express';
import { Service, Container } from 'typedi';
import { OpenaiService } from '@/services/openai.service';
import { ContractsService } from '@/services/contracts.service';
import { ContributionService } from '@/services/contribution.service';
import { CreateContributionDto } from '@/dtos/create-contribution.dto';

@Service()
export class ContributionController {
    public openai = Container.get(OpenaiService);
    public contracts = Container.get(ContractsService);
    private contributionService = Container.get(ContributionService);

    // public createContribution = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //     try {
    //         const createContributionDto: CreateContributionDto = req.body;
    //         const newContribution = await this.contributionService.createContribution(createContributionDto);

    //         res.status(201).json(newContribution);
    //     } catch (error) {
    //         next(error);
    //     }
    // };

    public getUserTop3Contribution = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: string = req.params.id;
            const companies = await this.contributionService.getUserTop3Contribution(userId);

            res.status(200).json(companies);
        } catch (error) {
            next(error);
        }
    };

    public getUserDashboard = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: string = req.params.id;
            const dashboardImgUrl = await this.contributionService.getUserDashboard(userId);

            res.status(200).json(dashboardImgUrl);
        } catch (error) {
            next(error);
        }
    }
}

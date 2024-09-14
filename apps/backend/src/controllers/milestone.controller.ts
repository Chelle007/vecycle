import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { MilestoneService } from '@/services/milestone.service'; // Adjust the import path as necessary
import { MilestoneDto } from '@/dtos/milestone.dto'; // Adjust the import path as necessary
import { HttpException } from '@/exceptions/HttpException'; // Adjust the import path as necessary

export class MilestoneController {
    private milestoneService = Container.get(MilestoneService);

    public getMilestonesByCompanyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const companyId: string = req.params.companyId;
            const milestones: MilestoneDto[] = await this.milestoneService.getMilestonesByCompanyId(companyId);

            if (!milestones) {
                throw new HttpException(404, 'No milestones found for this company');
            }

            res.status(200).json(milestones);
        } catch (error) {
            next(error);
        }
    };
}

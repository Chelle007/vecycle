import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { ContributionController } from '@/controllers/contribution.controller';

export class ContributionRoute implements Routes {
    public router = Router();
    private contributionController = new ContributionController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        // this.router.post('/contributions', this.contributionController.createContribution);
        this.router.get('/contributions/:id/top3', this.contributionController.getUserTop3Contribution);
        this.router.get('/contributions/:id/dashboard', this.contributionController.getUserDashboard);
    }
}

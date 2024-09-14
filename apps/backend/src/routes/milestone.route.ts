import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { MilestoneController } from '@/controllers/milestone.controller';

export class MilestoneRoute implements Routes {
    public router = Router();
    private milestoneController = new MilestoneController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/milestones/company/:companyId', this.milestoneController.getMilestonesByCompanyId);
    }
}

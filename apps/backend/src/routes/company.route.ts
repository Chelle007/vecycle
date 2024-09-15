import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { CompanyController } from '@/controllers/company.controller';

export class CompanyRoute implements Routes {
    public router = Router();
    private companyController = new CompanyController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/:id', this.companyController.getCompanyById);
    }
}

import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import { UserMilestoneController } from '@/controllers/usermilestone.controller';

export class UserMilestoneRoute implements Routes {
    public router = Router();
    private userMilestoneController = new UserMilestoneController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/:id/qrcodes', this.userMilestoneController.getUserQrCodes);
        this.router.post('/generate-qrcode', this.userMilestoneController.generateQrCode);
    }
}

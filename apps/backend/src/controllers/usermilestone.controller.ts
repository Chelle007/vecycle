import { Request, Response, NextFunction } from 'express';
import { Service, Container } from 'typedi';
import { UserMilestoneService } from '@/services/usermilestone.service';
import { HttpException } from '@/exceptions/HttpException';

@Service()
export class UserMilestoneController {
    private userMilestoneService = Container.get(UserMilestoneService);

    public getUserQrCodes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: string = req.params.id;
            const qrcodes: string[] = await this.userMilestoneService.getUserQrCodes(userId);

            if (!qrcodes || qrcodes.length === 0) {
                throw new HttpException(404, 'QR codes not found');
            }

            res.status(200).json(qrcodes);
        } catch (error) {
            next(error);
        }
    };

    public generateQrCode = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const qrcode: string = await this.userMilestoneService.generateQrCode();

            res.status(200).json(qrcode);
        } catch (error) {
            next(error);
        }
    };
}

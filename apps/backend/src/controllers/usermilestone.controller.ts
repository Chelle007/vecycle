import { Request, Response, NextFunction } from 'express';
import { Service, Container } from 'typedi';
import { UserMilestoneService } from '@/services/usermilestone.service';
import { UserVoucherDto } from '@/dtos/user-voucher.dto';

@Service()
export class UserMilestoneController {
    private userMilestoneService = Container.get(UserMilestoneService);

    public getUserVouchers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: string = req.params.id;
            const vouchers: UserVoucherDto[] = await this.userMilestoneService.getUserVouchers(userId);

            res.status(200).json(vouchers);
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

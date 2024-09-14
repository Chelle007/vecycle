import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMilestone } from '../entities/usermilestone.entity';

@Injectable()
export class UserMilestoneService {
    constructor(
        @InjectRepository(UserMilestone)
        private readonly userMilestoneRepository: Repository<UserMilestone>
    ) { }

    async getUserQrCodes(id: string): Promise<string[]> {
        const userMilestones = await this.userMilestoneRepository.find({ where: { user: { user_id: id } } });
        return userMilestones.map(milestone => milestone.voucher_qrcode_url);
    }

    async generateQrCode(): Promise<string> {
        const qrcode = '/public/images/qrcode.png';
        return qrcode;
    }

}

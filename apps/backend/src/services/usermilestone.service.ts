import { Injectable } from '@nestjs/common';
import { UserVoucherDto } from '@/dtos/user-voucher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMilestone } from '../entities/usermilestone.entity';

@Injectable()
export class UserMilestoneService {
    constructor(
        @InjectRepository(UserMilestone)
        private readonly userMilestoneRepository: Repository<UserMilestone>
    ) { }

    async getUserVouchers(id: string): Promise<UserVoucherDto[]> {
        const userMilestones = await this.userMilestoneRepository.find({ where: { user: { user_id: id } } });

        const userVouchers: UserVoucherDto[] = userMilestones.map(milestone => {
            return {
                reward_name: milestone.milestone.reward_name, // Assuming the reward name is in the Milestone entity
                qrcode: milestone.voucher_qrcode_url
            };
        });

        return userVouchers;
    }

    async generateQrCode(): Promise<string> {
        const qrcode = '/public/images/qrcode.png';
        return qrcode;
    }

}

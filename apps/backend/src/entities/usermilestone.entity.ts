import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Milestone } from './milestone.entity';
import { User } from './user.entity';

@Entity()
export class UserMilestone {
    @PrimaryGeneratedColumn('uuid')
    user_milestone_id: string;

    @ManyToOne(() => Milestone, { eager: true })
    milestone: Milestone;

    @ManyToOne(() => User, { eager: true })
    user: User;

    @Column()
    voucher_qrcode_url: string;

    @Column({ default: false })
    is_used: boolean;
}
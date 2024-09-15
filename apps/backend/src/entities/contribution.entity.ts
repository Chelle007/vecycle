import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Company } from './company.entity';

@Entity()
export class Contribution {
    @PrimaryGeneratedColumn('uuid')
    contribution_id: string;

    @ManyToOne(() => Company, { eager: true })
    company: Company;

    @ManyToOne(() => User, { eager: true })
    user: User;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    before_imgurl: string;

    @Column()
    after_imgurl: string;

    @Column({ default: false })
    is_approved: boolean;

    @Column({ default: false })
    is_deleted: boolean;

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    token_received: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    post_date: Date;
}
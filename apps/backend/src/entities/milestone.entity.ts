import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Milestone {
    @PrimaryGeneratedColumn('uuid')
    milestone_id: string;

    @Column()
    company_id: string;

    @Column('decimal', { precision: 10, scale: 2 })
    token_to_reach: number;
}
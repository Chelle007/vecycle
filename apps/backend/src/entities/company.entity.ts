import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Company {
    @PrimaryGeneratedColumn('uuid')
    company_id: string;

    @Column()
    name: string;

    @Column()
    profile_imgurl: string;
}

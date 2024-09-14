import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    user_id: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    wallet_address: string;

    @Column()
    profile_imgurl: string;
}
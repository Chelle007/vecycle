import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UserSeederService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { this.seed(); }

    async seed() {
        const users: CreateUserDto[] = [
            {
                first_name: 'John',
                last_name: 'Doe',
                wallet_address: '0x123456789abcdef',
            },
            {
                first_name: 'Jane',
                last_name: 'Smith',
                wallet_address: '0xabcdef123456789',
            },
        ];

        for (const userData of users) {
            const existingUser = await this.userRepository.findOne({
                where: { wallet_address: userData.wallet_address },
            });

            if (!existingUser) {
                const newUser = this.userRepository.create(userData);
                await this.userRepository.save(newUser);
                // console.log(`User ${userData.first_name} ${userData.last_name} added.`);
            } else {
                // console.log(`User with wallet_address ${userData.wallet_address} already exists.`);
            }
        }

        console.log('Seeding completed.');
    }
}

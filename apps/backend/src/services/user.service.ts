// src/users/user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {

        if (this.userRepository.findOne({ where: { walletAddress: createUserDto.walletAddress } })) {
            throw new Error('User already exists with this wallet address: ' + createUserDto.walletAddress)
        }

        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }

    async findOne(id: string): Promise<User> {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        const existingUser = await this.userRepository.findOneBy({ id });
        if (!existingUser) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        const updatedUser = { ...existingUser, ...updateUserDto };

        await this.userRepository.save(updatedUser);

        return this.findOne(id);
    }

}

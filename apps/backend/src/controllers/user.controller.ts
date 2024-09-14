import { Request, Response, NextFunction } from 'express';
import { Service, Container } from 'typedi';
import { UserService } from '@/services/user.service';
import { CreateUserDto } from '@/dtos/create-user.dto';
import { UpdateUserDto } from '@/dtos/update-user.dto';
import { HttpException } from '@/exceptions/HttpException';

@Service()
export class UserController {
    private userService = Container.get(UserService);

    public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: string = req.params.id;
            const user = await this.userService.getUserById(userId);

            if (!user) {
                throw new HttpException(404, 'User not found');
            }

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    };

    public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const createUserDto: CreateUserDto = req.body;
            const newUser = await this.userService.createUser(createUserDto);
            res.status(201).json(newUser);
        } catch (error) {
            next(error);
        }
    };

    public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const userId: string = req.params.id;
            const updateUserDto: UpdateUserDto = req.body;
            const updatedUser = await this.userService.updateUser(userId, updateUserDto);

            if (!updatedUser) {
                throw new HttpException(404, 'User not found');
            }

            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    };
}

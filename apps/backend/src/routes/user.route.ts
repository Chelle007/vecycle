import { Router } from 'express';
import { UserController } from '@/controllers/user.controller';
import { ValidationMiddleware } from '@/middlewares/validation.middleware';
import { CreateUserDto } from '@/dtos/create-user.dto';
import { UpdateUserDto } from '@/dtos/update-user.dto';
import { Service, Container } from 'typedi';

@Service()
export class UserRoute {
    public router = Router();
    private userController: UserController;

    constructor() {
        this.userController = Container.get(UserController);
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/:id', this.userController.getUserById);
        this.router.post('/', ValidationMiddleware(CreateUserDto), this.userController.createUser);
        this.router.post('/:id', ValidationMiddleware(UpdateUserDto), this.userController.updateUser);
    }
}

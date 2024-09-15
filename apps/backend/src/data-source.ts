import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Contribution } from './entities/contribution.entity';
import { Company } from './entities/company.entity';
import { Milestone } from './entities/milestone.entity';
import { UserMilestone } from './entities/usermilestone.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'vecycle',
    entities: [User, Contribution, Company, Milestone, UserMilestone],
    synchronize: true,
});

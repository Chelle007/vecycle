import { App } from '@/app';
import { initializeOpenAI } from './utils/initializeOpenAI';
import { SubmissionRoute } from './routes/submission.route';
import { CompanyRoute } from './routes/company.route';
import { ContributionRoute } from './routes/contribution.route';
import { MilestoneRoute } from './routes/milestone.route';
import { UserRoute } from './routes/user.route';
import { UserMilestoneRoute } from './routes/usermilestone.route';
import { AppDataSource } from './data-source';

export const openAIHelper = initializeOpenAI();

async function startServer() {
    try {
        // Initialize database connection
        await AppDataSource.initialize();
        console.log('Database connected and schema synchronized.');

        // Start the server
        const app = new App([new SubmissionRoute()]);
        // const app = new App([new SubmissionRoute(), new CompanyRoute(), new ContributionRoute(), new MilestoneRoute(), new UserRoute(), new UserMilestoneRoute()]);

        app.listen();
        console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

startServer();
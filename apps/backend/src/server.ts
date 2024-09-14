import { App } from '@/app';
import { initializeOpenAI } from './utils/initializeOpenAI';
import { SubmissionRoute } from './routes/submission.route';
import { AppDataSource } from './data-source';

export const openAIHelper = initializeOpenAI();

async function startServer() {
    try {
        // Initialize database connection
        const app = new App([new SubmissionRoute()]);

        await AppDataSource.initialize();
        console.log('Database connected and schema synchronized.');

        // Start the server
        app.listen();
        console.log(`Server is running on http://localhost:${process.env.PORT || 3000}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

startServer();
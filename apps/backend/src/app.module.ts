import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './modules/user.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', '..', 'public'), // Adjust the path to the public directory
        }),
        UserModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }

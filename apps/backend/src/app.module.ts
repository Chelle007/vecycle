import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UserModule } from './modules/user.module';
import { UserSeederService } from './services/user-seeder.service';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', '..', 'public'),
        }),
        UserModule,
    ],
    controllers: [],
    providers: [UserSeederService],
})
export class AppModule { }

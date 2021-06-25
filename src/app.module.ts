import { UserService } from './services/user/user.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { UserController } from './controllers/user/user.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    UserService,
    { useClass: UserService, provide: 'IUserService' },
  ],
})
export class AppModule {}

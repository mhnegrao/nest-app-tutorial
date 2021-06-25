import { Module } from '@nestjs/common';
import { IUserService } from 'src/shared/user.service.shared.ts';

import { UserService } from './../../services/user/user.service';
import { UserController } from './../../controllers/user/user.controller';

@Module({
  controllers: [UserController],
  providers: [{ useClass: UserService, provide: IUserService }],
})
export class UsersModule {}

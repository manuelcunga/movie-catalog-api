import { Module } from '@nestjs/common';
import { CreateUserController } from './controller/create/createUserController';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserService } from './services/create/createUser.service';
import { User } from './entities/User';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';
import { FindAllUsersController } from './controller/findAll/findAllUsers.controller';
import { FindAllUserServuce } from './services/findAll/findAllUser.service';
import { UpdateUserController } from './controller/update/updateUser.controller';
import { UpdateUserService } from './services/update/updateUser.service';
import { LoginController } from './controller/login/login.controller';
import { LoginService } from './services/login/login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [
    CreateUserController,
    UpdateUserController,
    FindAllUsersController,
    LoginController,
  ],
  providers: [
    CreateUserService,
    UpdateUserService,
    FindAllUserServuce,
    LoginService,
    UserRepository,
  ],

  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '60s',
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],

  exports: [TypeOrmModule],
})
export class UserModule {}

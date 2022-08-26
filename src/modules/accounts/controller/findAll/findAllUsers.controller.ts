import { Controller, Get } from '@nestjs/common';
import { FindAllUserServuce } from '../../services/findAll/findAllUser.service';

@Controller('users')
export class FindAllUsersController {
  constructor(private readonly userService: FindAllUserServuce) {}

  @Get('/')
  async handle() {
    return await this.userService.execute();
  }
}

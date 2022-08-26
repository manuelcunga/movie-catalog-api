import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginDTO } from '../../dtos/login.dto';
import { LoginService } from '../../services/login/login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.CREATED)
  async handle(@Body() data: LoginDTO) {
    return { token: await this.loginService.execute(data) };
  }
}

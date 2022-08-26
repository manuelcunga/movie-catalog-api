import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';
import { LoginDTO } from '../../dtos/login.dto';

@Injectable()
export class LoginService {
  constructor(
    private createUserRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async execute(data: LoginDTO): Promise<string> {
    const user = await this.createUserRepository.findByEmail(data.email);

    if (!user) {
      throw new BadRequestException('Email or password incorrect');
    }

    const passwordCompare = bcrypt.compareSync(data.password, user.password);

    if (!passwordCompare) {
      throw new BadRequestException('Email or password incorrect');
    }

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.phone,
    };

    return this.jwtService.sign(payload);
  }

  async validateCredentials(data: LoginDTO) {
    const user = await this.createUserRepository.findByEmail(data.email);

    if (!user) {
      throw new BadRequestException('Email or password incorrect');
    }

    const passwordCompare = bcrypt.compareSync(data.password, user.password);
    return passwordCompare;
  }
}

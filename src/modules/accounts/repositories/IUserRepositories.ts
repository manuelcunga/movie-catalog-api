import { CreateUserDTO } from '../dtos/createUserDTO';
import { LoginDTO } from '../dtos/login.dto';
import { UpdateUserDTO } from '../dtos/updateUser.dto';
import { User } from '../entities/User';

export interface IUserRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findAllUsers(): Promise<User[]>;
  update(id: string, data: UpdateUserDTO): Promise<User>;
  find(user: LoginDTO): Promise<User>;
}

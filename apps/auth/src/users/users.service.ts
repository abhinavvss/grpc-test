import { CreateUserDto, User } from '@app/common';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly users: User[] = [];

  onModuleInit() {
      for (let i =0 ; i < 10 ; i++) {
        this.create({ name: `NovaGems-Test-Today-SuccessFully-${i}` });
      }
  }
  create(createUserDto: CreateUserDto) {
    const user: User = {
      id: Date.now().toLocaleString(),
      ...createUserDto,
    }
    this.users.push(user);
    return user;
  }

  findAll() {
    new Logger('Auth gRPC').log('Finding Users...')
    return { users: this.users };
  }
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}

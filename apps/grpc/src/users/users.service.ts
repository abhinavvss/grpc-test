import { CreateUserDto, USERS_SERVICE_NAME, UsersServiceClient } from '@app/common';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { AUTH_SERVICE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UsersService implements OnModuleInit {
  private usersServiceClient: UsersServiceClient
  
  constructor(@Inject(AUTH_SERVICE) private client: ClientGrpc) {

  }
  onModuleInit() {
      this.usersServiceClient = this.client.getService<UsersServiceClient>(USERS_SERVICE_NAME)
  }

  create(createUserDto: CreateUserDto) {
    return this.usersServiceClient.createUser(createUserDto);
  }

  findAll() {
    new Logger('Client HTTP Request').log('Contacting gRPC...')
    return this.usersServiceClient.findAllUsers({});
  }
}

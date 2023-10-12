import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, Empty, User, Users, UsersServiceController, UsersServiceControllerMethods } from '@app/common';
import { Observable } from 'rxjs';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('users')
// @UsersServiceControllerMethods()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    createUser(request: CreateUserDto): User | Promise<User> | Observable<User> {
        return this.usersService.create(request);
    }
    @GrpcMethod('UsersService', 'findAllUsers')
    findAllUsers(request: Empty): Users | Promise<Users> | Observable<Users> {
        console.log("Request Interception!")
        return this.usersService.findAll();
    }
  // createUser(createUserDto: CreateUserDto) {
  //   // return this.usersService.create(createUserDto);
  // }

  // findAllUsers() {
  //   return this.usersService.findAll();
  // }
}

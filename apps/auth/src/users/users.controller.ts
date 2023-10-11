import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, Empty, User, Users, UsersServiceController, UsersServiceControllerMethods } from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly usersService: UsersService) {}

    createUser(request: CreateUserDto): User | Promise<User> | Observable<User> {
        return this.usersService.create(request);
    }
    findAllUsers(request: Empty): Users | Promise<Users> | Observable<Users> {
        return this.usersService.findAll();
    }
  // createUser(createUserDto: CreateUserDto) {
  //   // return this.usersService.create(createUserDto);
  // }

  // findAllUsers() {
  //   return this.usersService.findAll();
  // }
}

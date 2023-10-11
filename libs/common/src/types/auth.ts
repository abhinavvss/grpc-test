/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface Empty {
}

export interface Users {
  users: User[];
}

export interface CreateUserDto {
  name: string;
}

export interface User {
  id: string;
  name: string;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface UsersServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  findAllUsers(request: Empty): Observable<Users>;
}

export interface UsersServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createUser", "findAllUsers"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USERS_SERVICE_NAME = "UsersService";

import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from '@app/common';


async function bootstrap() {
  const PORT = 4000;
  new Logger('Auth gRPC Module').log(`Initialising @ ${PORT}...`);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `localhost:50053`,
        protoPath: join(__dirname, '../auth.proto'),
        package: AUTH_PACKAGE_NAME
      }
    }
  )
  await app.listen();
  const appC = await NestFactory.create(AuthModule);
  await appC.listen(PORT);
}
bootstrap();

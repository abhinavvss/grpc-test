import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { Logger } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from '@app/common';


async function bootstrap() {
  const PORT = 3001;
  new Logger('Auth gRPC Module').log(`Initialising @ ${PORT}...`);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `localhost:${PORT}`,
        protoPath: join(__dirname, '../auth.proto'),
        package: AUTH_PACKAGE_NAME
      }
    }
  )
  await app.listen();
  // const app = await NestFactory.create(AuthModule);
  // await app.listen(3001);
}
bootstrap();

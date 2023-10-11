import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const PORT = 3000;
  new Logger('Client HTTP Module').log(`Initialising @ ${PORT}...`)
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
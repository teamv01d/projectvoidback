import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      //isteğin gönderilen bütün verileri değil DTO kısmında belirtilen verileri çekmesini sağlayan kod parçası
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();

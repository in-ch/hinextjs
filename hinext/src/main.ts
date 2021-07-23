import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { // 함수 이름이니깐 바꿀 수 있음.
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,  // 우리가 원하는 실제 타입으로 변환해 준다. 
  })); // 우리가 쓰고 싶은 파이프를 넘겨 준다.

  await app.listen(4000);
}
bootstrap();

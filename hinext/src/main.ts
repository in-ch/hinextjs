import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { // 함수 이름이니깐 바꿀 수 있음.
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

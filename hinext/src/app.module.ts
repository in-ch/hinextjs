import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({  // 이걸 데코레이터라고 함. -> 클래스에 함수 기능을 넣을 수 있음.
  imports: [],
  controllers: [AppController], // 여기가 typeDef 같은 곳인가..?
  providers: [AppService],  // 여기에 함수가 담겨 있음.
})
export class AppModule {}

// 应用的根模块

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ListController } from './list.controller';
import { AppService } from './app.service';
import { ListService } from './list.service';

@Module({
  imports: [],
  controllers: [AppController, ListController],
  providers: [AppService, ListService],
})
export class AppModule {}

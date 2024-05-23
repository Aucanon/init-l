// 具有单一路由的基本控制器

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // HTTP 请求方法装饰器 为HTTP请求的特定端点创建处理程序 端点对应的HTTP请求（方法为GET）和路由路径
  getHello(): string {
    return this.appService.getHello();
  }
}

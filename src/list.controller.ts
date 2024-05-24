// 具有单一路由的基本控制器

import { Controller, Get, HttpCode, Post } from '@nestjs/common';
// import { AppService } from './app.service';
import { ListService } from './list.service'

@Controller('list') // 在装饰器中指定路径前缀为list 
// 分组路由 这些分组后的路由 路由管理与路由都与 /list 下的实体进行交互
export class ListController {
  constructor(private readonly appService: ListService) {}

  @Get('info') // 与前面装饰器的前缀 /list 组合映射为 GET /list/info
  @HttpCode(200)
  getHello(): string {
    return this.appService.getList();
  }

  @Post('create')
  @HttpCode(201)
  create(): string {
    return 'createcreate'
  }
}

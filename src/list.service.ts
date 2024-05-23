// 具有单一方法的基本服务

import { Injectable } from '@nestjs/common';

@Injectable()
export class ListService {
  getList(): string {
    return 'listlistlist';
  }
}

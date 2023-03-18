import { Injectable } from '@nestjs/common';
import { returnObj } from './interface';

// 接口处理逻辑函数
@Injectable()
export class AppService {
  getSource(id: number): returnObj {
    return {
      img: `http://localhost:3000/static/${id}.jpg`,
      id,
    };
  }
}

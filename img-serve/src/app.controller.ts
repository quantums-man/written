import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { returnObj } from './interface';

// 接口控制器
@Controller('img')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getSource(@Param() params): returnObj {
    return this.appService.getSource(params.id);
  }
}

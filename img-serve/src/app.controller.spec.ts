import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "returnObj"', () => {
      expect(appController.getSource({ id: 1 })).toBe({
        img: 'http://localhost:3000/static/1.jpg',
        id: 1,
      });
    });
  });
});

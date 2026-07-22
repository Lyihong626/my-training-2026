import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());//验证管道
  app.useGlobalInterceptors(new TransformInterceptor());
  app.enableCors({
    origin:'http://localhost:3001',//允许前端地址
    credential:true,
  })
  await app.listen(3000);
  console.log('hello!!!');
}
bootstrap();

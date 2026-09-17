import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './config/Execption handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter()); // Register the global exception filter
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

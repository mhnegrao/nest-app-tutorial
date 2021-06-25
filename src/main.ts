import { EntityNotFoundExceptionFilter } from './exceptions-filters/entity-not-found.exception';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  //configuração swagger
  const options = new DocumentBuilder()
    .setTitle('NEST-APP-TUTORIAL - Template NestJS')
    .setDescription('Documentação da API')
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

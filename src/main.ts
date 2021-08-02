import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()

  Logger.log("Localhost 4000");

  const options = new DocumentBuilder()
  .setTitle('Concurso')
  .setDescription('Concurso API descripcion')
  .setVersion('1.0')
  .addTag('concurso')
  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);
await app.listen(4000);

}
bootstrap();

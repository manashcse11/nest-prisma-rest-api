import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /** Swagger */
  const config = new DocumentBuilder()
    .setTitle('Nest - Prisma - Mysql - REST')
    .setDescription('Learning NestJS with Prisma integrations')
    .setVersion('0.1')
    .build();
    
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  /** End */

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

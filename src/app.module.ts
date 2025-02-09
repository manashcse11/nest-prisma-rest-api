import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { UniqueEmailValidator } from './users/decorators/unique-email.decorator';

@Module({
  imports: [PrismaModule, UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService, UniqueEmailValidator],
})
export class AppModule {}

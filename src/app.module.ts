import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './modules/test/test.module';
import { HelloModule } from './modules/hello/hello.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TestModule, HelloModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

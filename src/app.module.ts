import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './moudules/user/user.module';
import { User } from './moudules/user/entities/user.entity';

@Module({
  imports: [
    UserModule , 
    TypeOrmModule.forRoot({
      type:"mysql",
      host:"localhost",
      port:3306,
      username:'root',
      password:'root',
      database:'user1',
      entities:[User],
      synchronize:true
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

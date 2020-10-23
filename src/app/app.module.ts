import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LearnModule } from 'src/learn/learn.module';
import { MasterModule } from 'src/master/master.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const ENV = process.env.NODE_ENV || 'development';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${ENV}.env`,
      isGlobal: true
    }),
    MongooseModule.forRoot(
      process.env.DB_MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    ),
    LearnModule,
    MasterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

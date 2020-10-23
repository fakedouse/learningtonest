import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from './schemes/user-token.schema';
import { TokenService } from './token.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Token', schema: TokenSchema}])
  ],
  providers: [TokenService]
})
export class TokenModule {}

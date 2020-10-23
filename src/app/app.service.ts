import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getHi(): string {
    return 'Hi cruel World!';
  }
  postAuth(): string {
    return "dsfs"
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSchoolBookDto } from './dto/create-schoolbook.dto';
import { ISchoolBook } from './interfaces/schoolbook.interface';

@Injectable()
export class LearnService {
  constructor(@InjectModel('Schoolbook') private readonly schoolBook: Model<ISchoolBook>) {}
  getLearn(): string {
    return 'Hello this is Learn page!';
  }
  getSchoolBook(): string {
    return 'This is your Schoolbook!';
  }

  async find() {

  }

  async create(createSchoolbokDto: CreateSchoolBookDto) {
    const saltRound = 12;
    
  }
}

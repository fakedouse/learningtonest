import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LearnController } from "./learn.controller";
import { LearnService } from "./learn.service";
import { SchoolBookSchema } from "./schemes/schoolbook.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Schoolbook', schema: SchoolBookSchema}])
    ],
    exports: [],
    providers: [LearnService],
    controllers: [LearnController]
})
export class LearnModule {}
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { MasterController } from "./master.controller";
import { MasterService } from "./master.service";
import { MasterSchema } from "./schemes/master.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'MasterSchema', schema: MasterSchema}])
    ],
    exports: [],
    controllers: [MasterController],
    providers: [MasterService]
})
export class MasterModule {}
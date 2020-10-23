import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateMasterDto } from "./dto/create-master.dto";
import { IMaster } from "./interfaces/master.interface";
import * as bcrypt from "bcrypt";

@Injectable()
export class MasterService {
  constructor(@InjectModel('Master') private readonly masterModel: Model<IMaster>) {}
  
  async create(createMasterDto: CreateMasterDto) : Promise<IMaster> {
        const saltRound = 12;
        const salt = await bcrypt.genSalt(saltRound);
        const hash = await bcrypt.hash(createMasterDto.password, salt);

        const createdMaster = new this.masterModel(Object.assign({}, createMasterDto, { password: hash}));
        return await createdMaster.save();
    };
    
    async find(id: string) : Promise<IMaster> {
        return await  this.masterModel.findById(id).exec();
    };

    async edit(id: string, createMasterDto: CreateMasterDto): Promise<IMaster> {
        const editedMaster = await this.masterModel
            .findByIdAndUpdate(id, createMasterDto, { new: true });
        return editedMaster;
    }

    async delete(id: string): Promise<any> {
        const deletedMaster = await this.masterModel
            .findByIdAndRemove(id);
        return deletedMaster;
    }

}
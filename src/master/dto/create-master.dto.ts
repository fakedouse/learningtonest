import { IAddress } from "../interfaces/master.interface";

export class CreateMasterDto {
    readonly name: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly age: number;
    readonly dateofborn: number;
    readonly gender: string;
    readonly address: IAddress;
    readonly email: string;
    readonly telefon: number;
    readonly profession: string
    readonly skills?: Array<string>;
    readonly rating?: number;
    readonly login: string;
    readonly password: string;
}
import { Document } from 'mongoose';
import { IAssets, IContent } from '../interfaces/schoolbook.interface';

export class CreateSchoolBookDto {
    readonly title: string;
    readonly publish: string;
    readonly tags?: [string];
    readonly assets?: IAssets;
    readonly content: IContent;
}
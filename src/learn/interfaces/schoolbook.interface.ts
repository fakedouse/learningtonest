import { Document } from 'mongoose';

/*
    title: { type: String, required: true},
    publish: Date,
    tags: [String],
    assets: {
        images: {
            name: String,
            src: String,
            size: String
        },
        videos: {
            name: String,
            src: String,
            size: String
        },
        audios: {
            name: String,
            src: String,
            size: String
        },
        links: {
            name: String,
            href: String
        }
    },
    content: {
        maintenance: [String],
        chapters: [Object]
    }
*/
export interface IAsset extends Document {
    name: string;
    src: string;
    size: string;
};

export interface IChapter extends Document {
    header: string;
    content: any;
};

export interface IAssetLink extends Document {
    name: string;
    href: string;
};

export interface IContent extends Document {
    maintenance: [string];
    chapters: [IChapter];
};

export interface IAssets extends Document {
    readonly images?: IAsset;
    readonly videos?: IAsset;
    readonly audios?: IAsset;
    readonly links?: IAssetLink;
};

export interface ISchoolBook extends Document {
    readonly title: string;
    readonly publish: string;
    readonly tags?: [string];
    readonly assets?: IAssets;
    readonly content: IContent;
}
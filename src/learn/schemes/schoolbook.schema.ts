import * as mongoose from "mongoose";

export const SchoolBookSchema = new mongoose.Schema({
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
        },
    },
    content: {
        maintenance: [String],
        chapters: [Object]
    }
})
import * as mongoose from "mongoose";

export const MasterSchema = new mongoose.Schema({
    name: {
        type: String, trim: true, required: true
    },
    firstname: {
        type: String, trim: true, required: true
    },
    lastname: {
        type: String, trim: true, required: true
    },
    age: Number,
    dateofborn: {
        type: Date, required: true
    },
    gender: {
        type: String, 
    },
    address: {
        country: {
            type: String, required: true
        },
        region: {
            type: String, required: true
        },
        city: {
            type: String, required: true
        }
    },
    email: {
        type: String, required: true
    },
    telefon: {
        type: Number
    },
    profession: {
        type: String, required: true
    },
    skills: {
        type: [String]
    },
    rating: {
        type: Number, min: 0, max: 100, default: 50
    },
    login: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    }

})
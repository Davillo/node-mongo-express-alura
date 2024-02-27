import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    publisher: {type: String},
    price: {type: Number},
    pages: {type: Number},
}, {versionKey: false});

const bookModel = mongoose.model('books', bookSchema);

export default bookModel;
import { Schema,model } from "mongoose";
import { IBook } from "../interfaces/book.interface";

const bookSchema = new Schema<IBook>({
    title: {required:true, type: String},
    author: {required:true, type: String},
    publicationDate: {required:true, type: Date},
    isbn: {required:true, type:String},
    genre:{required:true, type: String}
});

export const bookModel = model("book",bookSchema);
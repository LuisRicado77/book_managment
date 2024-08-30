import { IBook} from "../interfaces/book.interface";
import { bookModel } from "../models/book.model";

const addBook = async (book:IBook) =>{
    try {
       const newBook = new bookModel(book);
       return await newBook.save();
    } catch (error) {
        throw new Error("Could not save in database")
    }
};

export {addBook};
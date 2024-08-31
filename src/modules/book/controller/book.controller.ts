import { IBook, IBookUpdate} from "../interfaces/book.interface";
import { bookModel } from "../models/book.model";

export const addBook = async (book:IBook) =>{
    try {
       const newBook = new bookModel(book);
       return await newBook.save();
    } catch (error) {
        throw new Error("Could not save in database")
    }
};

export const updateBook = async (id:string,book:IBookUpdate) =>{
    try {
        return await bookModel.findByIdAndUpdate(id,book)
    } catch (error) {
        throw new Error("Could not update in database")
    }
}
export const getBooks = async () =>{
    try{
        return await bookModel.find();
    }catch(error){
        throw new Error("Could not read in database");
    }
};


export const getBooksById = async (id:string) =>{
    try{
        return await bookModel.findById(id);
    }catch(error){
        throw new Error("Could not read in database");
    }
};

export const deleteBookById = async (id:string) =>{
    try{
        return await bookModel.findByIdAndDelete(id);
    }catch(error){
        throw new Error("Could not read in database");
    }
};
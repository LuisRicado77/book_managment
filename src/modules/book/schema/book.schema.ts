import Joi from "joi";

const title = Joi.string();
const author = Joi.string();
const publicationDate = Joi.date();
const isbn = Joi.string();
const genre = Joi.string();


const createBookSchema = Joi.object({
    title: title.required(),
    author: author.required(),
    publicationDate: publicationDate.required(),
    isbn: isbn.required(),
    genre: genre.required()
})
const updateBookSchema = Joi.object({
    title: title,
    author:author,
    publicationDate: publicationDate,
    isbn: isbn,
    genre: genre
})
export {createBookSchema, updateBookSchema}
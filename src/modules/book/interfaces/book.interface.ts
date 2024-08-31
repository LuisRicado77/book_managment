export interface IBook {
    title: string
    author: string
    publicationDate: Date
    isbn: string
    genre:string
};

export interface IBookUpdate extends Partial<IBook> {};

import express, { Request, Response } from "express";
import { booksRouter } from "./modules/books/books.router";

//servicio de express
const app = express();  

//call modules and add specific routes
app.use("/books",booksRouter);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send({ msg:"hello luis" });
});


app.listen(3000,() =>{
    console.log("Server running at port 3000");
})
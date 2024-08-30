import { Router } from "express";
import  express, {Request,Response}  from "express";
import { addBook } from "./controller/book.controller";

const bookRouter = Router();

bookRouter.get("/", (req: Request, res: Response) => {
    res.status(200).send({ msg:"hello luis from router" });
});


bookRouter.post("/", async (req:Request, res:Response) =>{
    
    try {
        const body = req.body;
        const response = await addBook(body);
        res.status(201).send({
            msg:"created with success",
            data: response
        });   
    } catch (error) {
         const err = error as Error;
         const errorMsg = err?.message;
         res.send(400).send({
            msg:errorMsg || "Error in database"
         });
    }
})

export { bookRouter }

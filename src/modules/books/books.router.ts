import { Router } from "express";
import  express, {Request,Response}  from "express";

const booksRouter = Router();

booksRouter.get("/", (req: Request, res: Response) => {
    res.status(200).send({ msg:"hello luis from router" });
});


export { booksRouter }

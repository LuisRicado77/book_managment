import express, { Request, Response } from "express";


const app = express();  

app.get("/", (req: Request, res: Response) => {
    res.status(400).send({ msg:"hello luis" });
});


app.listen(3000,() =>{
    console.log("Server running at port 3000");
})
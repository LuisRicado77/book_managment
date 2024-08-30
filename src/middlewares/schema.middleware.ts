import { Schema } from "mongoose";
import Joi from "joi";
import { NextFunction } from "express";
import { Request, Response } from "express";

export const schemaMiddleware = (schema: Joi.Schema) =>{
    return (req: Request,res: Response, next: NextFunction) => {
        try {
            const body = req.body;
            const validated = schema.validate(body);

            if(validated.error){
               res.status(400).send({
                msg: "All the parameters must be set"
               })
            }else{
                next();
            }
        } catch (error) {
            res.status(500).send({
                msg: "internal server Error"
            })
        }
    };
}
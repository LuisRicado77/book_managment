import { Router } from "express";
import express, { Request, Response } from "express";
import {
  addBook,
  deleteBookById,
  getBooks,
  getBooksById,
  updateBook,
} from "./controller/book.controller";
import { schemaMiddleware } from "../../middlewares/schema.middleware";
import { createBookSchema, updateBookSchema } from "./schema/book.schema";

const bookRouter = Router();
//para botener información
bookRouter.get("/", async (req: Request, res: Response) => {
  try {
    const books = await getBooks();
    res.status(200).send({
      msg: "Read wih success",
      data: books,
    });
  } catch (error) {
    const err = error as Error;
    const errorMsg = err?.message;
    res.send(400).send({
      msg: errorMsg || "Error in Database",
    });
  }
});

bookRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
      const books = await deleteBookById(id);
      res.status(200).send({
        msg: "Deleted wih success",
        data: books,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in Database",
      });
    }
  });


bookRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const books = await getBooksById(id);
    res.status(200).send({
      msg: "Read wih success",
      data: books,
    });
  } catch (error) {
    const err = error as Error;
    const errorMsg = err?.message;
    res.send(400).send({
      msg: errorMsg || "Error in Database",
    });
  }
});

//para creación
bookRouter.post(
  "/",
  schemaMiddleware(createBookSchema),
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const response = await addBook(body);
      res.status(201).send({
        msg: "created with success",
        data: response,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in database",
      });
    }
  }
);

//para actualizar
bookRouter.patch(
  "/:id",
  schemaMiddleware(updateBookSchema),
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const id = req.params.id;
      const response = await updateBook(id, body);
      res.status(200).send({
        msg: "Update with success",
        data: response,
      });
    } catch (error) {
      const err = error as Error;
      const errorMsg = err?.message;
      res.send(400).send({
        msg: errorMsg || "Error in Database",
      });
    }
  }
);
export { bookRouter };

import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { PORT } from "./constants";
import "express-async-errors";
import cors from "cors";
import { AppError } from "./error/AppError";
import { routes } from "./routes";
import path from "path";

dotenv.config({ path: process.env.NODE_ENV === "dev" ? ".env.dev" : ".env" });

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("DB mongo is connected!");
    const app = express();

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );

    app.use(cors());
    app.use(express.json());
    app.use(routes);

    app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (err instanceof AppError)
          return response.status(err.statusCode).json({ message: err.message });

        return response.status(500).json({
          status: "error",
          message: `Internal server error ==> ${err.message}`,
        });
      }
    );

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log("Erro ==> DB mongo is not connected!"));

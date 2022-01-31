import express, { Request, Response } from "express";

export const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).send("Do you believe in the upside down world?");
});

router.get("/inverted", async (req: Request, res: Response) => {
  const message = "Do you believe in the upside down world?";
  res.status(200).send(reverseMessage(message));
});

function reverseMessage(message: string) {
  return message.split("").reverse().join("");
}

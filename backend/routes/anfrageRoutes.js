import express from "express";
import { sendAnfrage } from "../controllers/anfrageController.js";

const router = express.Router();

router.post("/send", sendAnfrage);

export default router;

import express from "express";
import { contactController } from "../controllers/contactController";

const router = express.Router();

router.post("/create", contactController.create);
router.put("/update", contactController.update);
router.delete("/delete", contactController.delete);
router.post("/search", contactController.search);

export default router;
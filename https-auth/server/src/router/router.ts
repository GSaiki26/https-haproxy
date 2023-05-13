// Libs
import { Router } from "express";
import IndexController from "../controllers/indexController";

// Data
const router = Router();

// Routes
router.get("/", IndexController.get.bind(IndexController));

// Code
export default router;

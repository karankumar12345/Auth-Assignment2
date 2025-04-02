import { getUsers, registerLoginController } from "@/controllers/user";
import express from "express";

const router = express.Router();

// Register/Login Route
router.post("/auth", registerLoginController);
router.get("/auth",getUsers)
export default router;

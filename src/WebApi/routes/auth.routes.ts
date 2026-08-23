import express from "express";
import { container } from "tsyringe";
import AuthController from "../controllers/auth.controller";

const router = express.Router();
const authController = container.resolve(AuthController);

router.post("/login", authController.login);

router.post("/register", authController.register);

router.post("/logout", authController.logout);

export default router;
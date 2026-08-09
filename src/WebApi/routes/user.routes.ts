import express from "express";
import { container } from "tsyringe";
import { UserController } from "../controllers/user.controller";

const router = express.Router();
const controller = container.resolve(UserController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;

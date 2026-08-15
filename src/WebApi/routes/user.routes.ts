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

router.put(
  "/users/:id/email",
  controller.changeEmail
);

router.put(
  "/users/:id/phone",
  controller.changePhoneNumber
);

router.put(
  "/users/:id/password",
  controller.changePassword
);

router.put(
  "/users/:id/role",
  controller.changeRole
);

router.post(
  "/users/:id/activate",
  controller.activate
);

router.post(
  "/users/:id/deactivate",
  controller.deactivate
);

export default router;

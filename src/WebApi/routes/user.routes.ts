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
  "/:id/email",
  controller.changeEmail
);

router.put(
  "/:id/phone",
  controller.changePhoneNumber
);

router.put(
  "/:id/password",
  controller.changePassword
);

router.put(
  "/:id/role",
  controller.changeRole
);

router.post(
  "/:id/activate",
  controller.activate
);

router.post(
  "/:id/deactivate",
  controller.deactivate
);

export default router;

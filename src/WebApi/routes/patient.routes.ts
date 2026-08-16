import express from "express";
import { container } from "tsyringe";
import { PatientController } from "../controllers/patient.controller";

const router = express.Router();
const controller = container.resolve(PatientController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

router.put(
  "/:id/phone",
  controller.changePhoneNumber
);

router.put(
  "/:id/email",
  controller.changeEmail
);

router.put(
  "/:id/address",
  controller.changeAddress
);

// Contacto de emergencia
router.put(
  "/:id/emergency-contact",
  controller.updateEmergencyContact
);

// Imagen
router.put(
  "/:id/image",
  controller.changeImage
);

// Estado
router.post(
  "/:id/activate",
  controller.activate
);

router.post(
  "/:id/deactivate",
  controller.deactivate
);


export default router;

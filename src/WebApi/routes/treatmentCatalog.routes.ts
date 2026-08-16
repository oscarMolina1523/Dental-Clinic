import express from "express";
import { container } from "tsyringe";
import { TreatmentCatalogController } from "../controllers/treatmentCatalog.controller";

const router = express.Router();
const controller = container.resolve(TreatmentCatalogController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

// Cambiar precio
router.put("/:id/price", controller.changePrice);

// Cambiar duración
router.put("/:id/duration", controller.changeDuration);

// Activar tratamiento
router.post("/:id/activate", controller.activate);

// Desactivar tratamiento
router.post("/:id/deactivate", controller.deactivate);

export default router;

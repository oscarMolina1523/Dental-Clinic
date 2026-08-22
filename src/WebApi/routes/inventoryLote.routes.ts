import express from "express";
import { container } from "tsyringe";
import { InventoryLoteController } from "../controllers/inventoryLote.controller";

const router = express.Router();
const controller = container.resolve(InventoryLoteController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);


// ============================================================
// STOCK
// ============================================================

router.post(
  "/:id/increase-stock",
  controller.increaseStock
);

router.post(
  "/:id/decrease-stock",
  controller.decreaseStock
);

// ============================================================
// INFORMATION
// ============================================================

router.get(
  "/:id/quantity",
  controller.getQuantity
);

router.get(
  "/:id/is-expired",
  controller.isExpired
);

router.get(
  "/:id/is-valid",
  controller.isValid
);

router.get(
  "/:id/is-empty",
  controller.isEmpty
);

router.get(
  "/:id/has-stock",
  controller.hasStock
);

router.get(
  "/:id/days-until-expiration",
  controller.getDaysUntilExpiration
);


export default router;

import { Router } from "express";
import ServiceController from "../controllers/serviceController.js";

const route = Router();

route.get("/service/:id", ServiceController.getByService)
route.get("/service", ServiceController.getAllService)
route.post("/service", ServiceController.createService)

export default route;
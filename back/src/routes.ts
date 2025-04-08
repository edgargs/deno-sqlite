import { Router } from "@oak";
import { peopleController } from "./controllers.ts";

const router = new Router();

router.post("/people", peopleController.createPerson);
router.get("/people", peopleController.getAllPeople);
router.put("/people/:id", peopleController.updatePerson);
router.delete("/people/:id", peopleController.deletePerson);

export { router };
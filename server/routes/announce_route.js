import express from "express";
import {
	createAnnounce,
	getAllAnnounce,
	updateAnnounce,
	deleteAnnounce,
	getSingleAnnounce,
} from "../controllers/announce_controller.js";

const router = express.Router();

router.post("/create", createAnnounce);
router.get("/get", getAllAnnounce);
router.get("/get/:id", getSingleAnnounce);
router.put("/update/:id", updateAnnounce);
router.delete("/delete/:id", deleteAnnounce);

export default router;

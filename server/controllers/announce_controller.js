import Announce from "../models/announce_model.js";
import { errorHandler } from "../utils/error.js";

export const createAnnounce = async (req, res, next) => {
	try {
		const { title, profession, avatar, message } = req.body;
		if (!title || !profession || !avatar || !message) {
			return next(
				errorHandler(
					400,
					"The request body must contain 4 key:value pairs >>> title:string, profession:string, avatar:string, message:string"
				)
			);
		}
		const announce = await Announce.create({
			title,
			profession,
			avatar,
			message,
		});
		return res.status(201).json(announce);
	} catch (error) {
		next(err);
	}
};
export const getAllAnnounce = async (req, res, next) => {
	try {
		const announces = await Announce.find();
		if (!announces) {
			return next(errorHandler(404, "No announcements"));
		}
		res.status(200).json(announces);
	} catch (error) {
		next(error);
	}
};
export const updateAnnounce = async (req, res, next) => {
	try {
		const announce = await Announce.findById(req.params.id);
		if (!announce) {
			return next(errorHandler(404, "announcement not found"));
		}
		const updatedAnnounce = await Announce.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);

		res.status(202).json(updatedAnnounce);
	} catch (error) {
		next(error);
	}
};
export const deleteAnnounce = async (req, res, next) => {
	try {
		const announce = await Announce.findById(req.params.id);
		if (!announce) {
			next(errorHandler(404, "announcement not found"));
		}
		await Announce.findByIdAndDelete(req.params.id);
		res.status(200).json("The announcement was deleted");
	} catch (error) {
		next(error);
	}
};
export const getSingleAnnounce = async (req, res, next) => {
	try {
		const announce = await Announce.findById(req.params.id);
		if (!announce) {
			return next(errorHandler(404, "announcement not found"));
		}
		res.status(200).json(announce);
	} catch (error) {
		next(error);
	}
};

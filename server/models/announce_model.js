import mongoose from "mongoose";
const announceSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: false,
		},
		profession: {
			type: String,
			required: true,
			unique: false,
		},
		avatar: {
			type: String,
			default:
				"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
		},
		message: {
			type: String,
			required: true,
			unique: false,
		},
	},
	{ timestamps: true }
);
const Announce = mongoose.model("Anounce", announceSchema);
export default Announce;

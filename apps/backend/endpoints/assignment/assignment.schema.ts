import mongoose, { Types } from "mongoose";

const criteriaSchema = new mongoose.Schema({
	desc: {
		type: String,
		required: true,
	},
	performanceLevels: [
		{
			label: {
				type: String,
				required: true,
			},
			desc: {
				type: String,
				required: true,
			},
		},
	],
});

const rubricSchema = new mongoose.Schema(
	{
		desc: {
			type: String,
			required: true,
		},
		criteria: [criteriaSchema],
	},
	{
		_id: false,
	},
);

const essaySchema = new mongoose.Schema({
	file: {
		type: String,
		required: true,
	},
	scoring: [
		{
			criterion: {
				type: Types.ObjectId,
			},
			//performance level is only as high as the criterion's performance level length
			performanceLevel: {
				type: Number,
			},
			comments: {
				type: String,
			},
		},
	],
});

const assignmentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		rubric: {
			type: rubricSchema,
			required: true,
		},
		eassys: [
			{
				type: essaySchema,
			},
		],
	},
	{
		timestamps: true,
	},
);

export const Assignments = mongoose.model("Assignment", assignmentSchema);

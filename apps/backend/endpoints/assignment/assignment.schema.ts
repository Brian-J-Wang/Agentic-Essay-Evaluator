import mongoose from "mongoose";

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
	},
	{
		timestamps: true,
	},
);

export const Assignments = mongoose.model("Assignment", assignmentSchema);

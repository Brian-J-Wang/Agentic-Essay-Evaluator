import mongoose, { Types } from "mongoose";

const criteriaSchema = new mongoose.Schema({
	//a title to give the criterion
	title: {
		type: String,
		required: true,
	},
	//a short description of the criterion
	desc: {
		type: String,
		required: true,
	},
	//The list of performance levels for the criterion, from lowest to highest
	performanceLevels: {
		incomplete: {
			//The label for the performance level
			label: {
				type: String,
				required: true,
			},
			desc: {
				type: String,
				required: true,
			},
		},
		partial: {
			//The label for the performance level
			label: {
				type: String,
				required: true,
			},
			desc: {
				type: String,
				required: true,
			},
		},
		complete: {
			//The label for the performance level
			label: {
				type: String,
				required: true,
			},
			desc: {
				type: String,
				required: true,
			},
		},
	},
});

const rubricSchema = new mongoose.Schema(
	{
		//an overview of the rubric that specifies expectations for this essay.
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
	//url to the file in google cloud storage
	file: {
		type: String,
		required: true,
	},
	//scoring of the essay based on the rubric
	scoring: [
		{
			//the id of the criterion that is being referenced
			criterion: {
				type: Types.ObjectId,
			},
			//performance level is only as high as the criterion's performance level length
			performanceLevel: {
				type: String,
				enum: ["incomplete", "partial", "complete"],
			},
			//notes about why the given performance level is given and what can be done to improve it
			comments: {
				type: String,
			},
		},
	],
}, {
	timestamps: true,
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
		//essay submissions, with the last submitted essay first on the list
		eassys: [essaySchema],
	},
	{
		timestamps: true,
	},
);

export const Assignments = mongoose.model("Assignment", assignmentSchema);

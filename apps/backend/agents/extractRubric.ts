import { Type } from "@google/genai";
import { gemini } from "../config/agents";

const extractRubric = (rubric: string) => {
	return `extract the rubric from this text following these following rules:
		- if the given text is not a rubric, return an empty object
		- Preserve the original wording if possible
		- do not add any additional information other than the rubric
		- do not add any additional formatting other than the rubric

		This is the rubric: ${rubric}
	`;
};

export const extractRubricFromPrompt = (rubric: string) => {
	return gemini.models.generateContent({
		model: "gemini-2.5-flash",
		contents: extractRubric(rubric),
		config: {
			responseMimeType: "application/json",
			responseSchema: {
				type: Type.OBJECT,
				properties: {
					desc: {
						type: Type.STRING,
						description: "Description of the rubric",
					},
					criteria: {
						type: Type.ARRAY,
						description: "List of criteria for the rubric",
						items: {
							type: Type.OBJECT,
							properties: {
								desc: {
									type: Type.STRING,
									description: "Description of the criterion",
								},
								performanceLevels: {
									type: Type.ARRAY,
									description: "List of performance levels for the criterion",
									items: {
										type: Type.OBJECT,
										properties: {
											label: {
												type: Type.STRING,
												description: "Label for the performance level (e.g., Excellent, Good)",
											},
											desc: {
												type: Type.STRING,
												description: "Description of what this performance level entails",
											},
										},
										required: ["label", "desc"],
									},
								},
							},
							required: ["desc", "performanceLevels"],
						},
					},
				},
				required: ["desc", "criteria"],
			},
		},
	});
};

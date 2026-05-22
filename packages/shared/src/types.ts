export type AssignmentItem = {
	id: string;
	name: string;
	dateCreated: Date;
	//The number of rubric items that are incomplete, partial, or complete respectively
	//e.g. [5, 3, 2] means 5 incomplete, 3 partial, and 2 complete
	status: number[];
	rubric: Rubric;
	essays: Essay[];
};

export type Rubric = {
	rubricItems: RubricItem[];
};

export type RubricItem = {
	name: string;
	description: string;
	completeCondition: string;
	partialCondition: string;
	incompleteCondition: string;
};

export type Essay = {
	id: string;
	dateCreated: Date;
	status: number[];
	//A short explanation of the current shortfalls of the essay
	essaySummary: string;
	//A short list of action items to improve the essay
	actionItems: string[];
};

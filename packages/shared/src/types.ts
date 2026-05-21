export type AssignmentItem = {
	id: string;
	name: string;
	dateCreated: Date;
	//The number of rubric items that are incomplete, partial, or complete respectively
	//e.g. [5, 3, 2] means 5 incomplete, 3 partial, and 2 complete
	status: number[];
};

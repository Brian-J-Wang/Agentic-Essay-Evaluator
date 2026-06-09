import type { Request, Response } from "express";
import { Assignments } from "./assignment.schema";

export const addNewAssignment = (req: Request, res: Response) => {
	console.log("added new assignment");
};

export const getAssignments = (req: Request, res: Response) => {
	Assignments.find({})
		.then((assignments) => {
			console.log(assignments);
			res.send(assignments);
		})
		.catch((err) => {
			console.log(err);
			res.status(404).send(err);
		});
};

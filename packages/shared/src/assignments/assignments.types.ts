import z from "zod";
import { newAssignmentSchema } from "./assignment.schemas";

export type Assignment = {
	_id: string;
	name: string;
	rubric: {
		desc: string;
		criteria: {
			desc: string;
			performanceLevels: {
				label: string;
				desc: string;
			}[];
		}[];
	};
	essays: {}[];
};

export type NewAssignment = z.infer<typeof newAssignmentSchema>;

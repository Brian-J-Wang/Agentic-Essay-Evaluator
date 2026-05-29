import z from "zod";
import { AssignmentSchema, newAssignmentSchema } from "./assignment.schemas";

export type Assignment = z.infer<typeof AssignmentSchema>;

export type NewAssignment = z.infer<typeof newAssignmentSchema>;

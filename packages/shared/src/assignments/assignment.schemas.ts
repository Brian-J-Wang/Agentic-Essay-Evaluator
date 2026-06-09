import z from "zod";

export const newAssignmentSchema = z.object({
	name: z.string().nonempty().min(1).max(50),
	rubric: z.string().min(1),
});

import z from "zod";

export const newAssignmentSchema = z.object({
  name: z.string().nonempty().max(50),
  rubric: z.string(),
});

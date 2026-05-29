import z from "zod";

export const AssignmentSchema = z.object({
  name: z.string().nonempty().min(1).max(50),
  rubric: z.string().min(1),
});

export const newAssignmentSchema = z.object({
  name: z.string().nonempty().min(1).max(50),
  rubric: z.string().min(1),
});

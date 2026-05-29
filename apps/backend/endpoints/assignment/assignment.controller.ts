import type { Request, Response } from "express";

export const addNewAssignment = (req: Request, res: Response) => {
  console.log("added new assignment");
};

export const getAssignments = (req: Request, res: Response) => {
  console.log("getting assignments");
};

import { Router } from "express";
import { addNewAssignment, getAssignments } from "./assignment.controller";

const assignmentRoute = Router();

assignmentRoute.get("/", getAssignments);

assignmentRoute.post("/", addNewAssignment);

export default assignmentRoute;

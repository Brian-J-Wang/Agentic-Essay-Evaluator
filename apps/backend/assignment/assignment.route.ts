import { Router } from "express";
import { addNewAssignment } from "./assignment.controller";

const assignmentRoute = Router();

assignmentRoute.post("/", addNewAssignment);

export default assignmentRoute;

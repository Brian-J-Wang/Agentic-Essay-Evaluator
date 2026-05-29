import { env } from "../config/env";
import mongoose from "mongoose";
import { Assignments } from "../endpoints/assignment/assignment.schema";
import { dummyAssignments } from "./dummyAssignments";

mongoose
	.connect(env.MONGO_URL)
	.then(() => {
		return Assignments.deleteMany({});
	})
	.then(() => {
		return Assignments.insertMany(dummyAssignments);
	})
	.then(() => {
		console.log("successfully added dummy data");
		return mongoose.disconnect();
	})
	.catch((err) => {
		console.log(err);
	});

import express from "express";
import cors from "cors";
import assignmentRoute from "./endpoints/assignment/assignment.route";
import { env } from "./config/env";
import mongoose from "mongoose";

const app = express();

mongoose
	.connect(env.MONGO_URL)
	.then(() => {
		console.log("sucessfully connected to database");
	})
	.catch(() => {
		console.log("unable to connect to database");
	});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assignment", assignmentRoute);

app.use("/ping", (req, res) => {
	res.send({
		res: "ok",
	});
});

app.listen(env.PORT, env.HOST, () => {
	console.log(`Server started on port http://${env.HOST}:${env.PORT}`);
});

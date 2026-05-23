import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import assignmentRoute from "./assignment/assignment.route";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assignment", assignmentRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server started on port ${process.env.PORT}`);
});

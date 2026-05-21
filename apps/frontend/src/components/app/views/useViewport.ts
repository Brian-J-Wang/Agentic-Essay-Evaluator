import { useState } from "react";
import type { ReactNode } from "react";
import AssignmentList from "./assignmentList/assignmentList";
import Assignment from "./assignment/assignment";

const UseViewport = () => {
	const [ViewportComponent, _setViewport] = useState(() => AssignmentList);

	const setViewport = () => {};

	return { ViewportComponent, setViewport };
};

type ValidViewports = "assignmentList" | "assignment";

const getViewport = (viewport: ValidViewports) => {
	switch (viewport) {
		case "assignmentList":
			return AssignmentList;
		case "assignment":
			return Assignment;
	}
};

export default UseViewport;

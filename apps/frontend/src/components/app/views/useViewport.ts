import { useState } from "react";
import AssignmentList from "./assignmentList/assignmentList";
import Assignment from "./assignment/assignment";
import type { Viewport } from "./views.types";

const UseViewport = () => {
	const [ViewportComponent, setViewportComponent] = useState<React.FC<Viewport>>(() => AssignmentList);

	const setViewport = (viewport: React.FC<Viewport>) => {
		setViewportComponent(viewport);
	};

	return { ViewportComponent, setViewport };
};

export default UseViewport;

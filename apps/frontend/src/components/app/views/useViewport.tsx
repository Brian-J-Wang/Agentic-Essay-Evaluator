import { useState, type ReactNode } from "react";
import AssignmentList from "./assignmentList/assignmentList";
import Assignment from "./assignment/assignment";
import type { ViewportConfig } from "./views.types";

const componentMap = {
	assignmentListViewport: AssignmentList,
	assignmentViewport: Assignment,
};

const UseViewport = () => {
	const [Viewport, _setViewport] = useState<ReactNode>(() => <AssignmentList />);

	const setViewport = (viewportConfig: ViewportConfig) => {
		_setViewport(getComponent(viewportConfig));
	};

	return { Viewport, setViewport };
};

const getComponent = (viewportConfig: ViewportConfig) => {
	switch (viewportConfig.type) {
		case "assignmentListViewport":
			return <AssignmentList {...viewportConfig.props} />;
		case "assignmentViewport":
			return <Assignment {...viewportConfig.props} />;
	}
};

export default UseViewport;

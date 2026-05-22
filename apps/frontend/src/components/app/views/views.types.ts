import type { AssignmentItem } from "shared/src/types";

export type Viewport = {};

export type ViewportConfig =
	| { type: "assignmentListViewport"; props: AssignmentListViewport }
	| { type: "assignmentViewport"; props: AssignmentViewport };

export type AssignmentViewport = Viewport & {
	assignmentItem: AssignmentItem;
};

export type AssignmentListViewport = Viewport & {};

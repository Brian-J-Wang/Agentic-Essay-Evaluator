import type { Assignment } from "@brwwang/shared/src/assignments/assignments.types";

export type Viewport = {};

export type ViewportConfig =
	| { type: "assignmentListViewport"; props: AssignmentListViewport }
	| { type: "assignmentViewport"; props: AssignmentViewport };

export type AssignmentViewport = Viewport & {
	assignment: Assignment;
};

export type AssignmentListViewport = Viewport & {};

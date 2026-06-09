import { useContext, useEffect } from "react";
import AssignmentTableRow from "./assignmentTableRow/assignmentTableRow";
import styles from "./assignmentList.module.css";
import ModalContext from "@components/app/features/modal/modal.context";
import NewAssignmentModal from "./newAssignmentModal/newAssignmentModal";
import type { AssignmentListViewport } from "../views.types";
import type { Assignment } from "@brwwang/shared/src/assignments/assignments.types";
import ViewportContext from "@components/app/viewport/viewportContext";
import { useUserAssignmentAPI } from "@components/app/features/userAssignments/userAssignments.api";

const AssignmentList: React.FC<AssignmentListViewport> = () => {
	const { assignments, isloading, error, api } = useUserAssignmentAPI();
	const modalContext = useContext(ModalContext);
	const onNewAssignmentClick = () => {
		modalContext.openModal(
			<NewAssignmentModal
				onSubmit={(data) => {
					console.log(data);
				}}
			/>,
		);
	};

	const viewportContext = useContext(ViewportContext);
	const handleAssignmentItemClick = (assignment: Assignment) => () => {
		viewportContext.setViewport({
			type: "assignmentViewport",
			props: { assignment },
		});
	};

	return (
		<div className={styles.viewport}>
			<div className="flex justify-between">
				<h1 className="text-3xl font-semibold">Assignments</h1>
				<button
					className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 text-neutral-50"
					onClick={onNewAssignmentClick}
				>
					New Assignment
				</button>
			</div>
			<table className={styles.viewport__table}>
				<thead>
					<tr>
						<th>Name</th>
						<th>Date Created</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{assignments.map((assignment) => (
						<AssignmentTableRow
							key={assignment._id}
							assignmentItem={assignment}
							onClick={handleAssignmentItemClick(assignment)}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AssignmentList;

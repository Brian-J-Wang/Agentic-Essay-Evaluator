import AssignmentItem from "./assignmentItem/assignmentItem";
import styles from "./assignmentList.module.css";

const testAssignments = [
	{ id: "1", name: "Essay 1", dateCreated: new Date(), status: "Completed" },
	{ id: "2", name: "Essay 2", dateCreated: new Date(), status: "Completed" },
];

const AssignmentList = () => {
	return (
		<div className={styles.viewport}>
			<div className="flex justify-between">
				<h1 className="text-3xl font-semibold">Assignments</h1>
				<button className="cursor-pointer rounded-md bg-neutral-800 px-4 py-2 text-neutral-50">
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
					{testAssignments.map((assignment) => (
						<AssignmentItem key={assignment.id} assignmentItem={assignment} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AssignmentList;

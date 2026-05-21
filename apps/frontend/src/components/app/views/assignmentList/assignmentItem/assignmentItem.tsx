import type { AssignmentItem as AssignmentItemType } from "shared/src/types";

interface AssignmentItemProps {
	assignmentItem: AssignmentItemType;
}

const AssignmentItem: React.FC<AssignmentItemProps> = ({ assignmentItem }) => {
	return (
		<tr>
			<td>{assignmentItem.name}</td>
			<td>{assignmentItem.dateCreated.toISOString().split("T")[0]}</td>
			<td>{assignmentItem.status}</td>
		</tr>
	);
};

export default AssignmentItem;

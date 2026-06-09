import type { AssignmentItem as AssignmentItemType } from "shared/src/types";

type AssignmentItemProps = React.ComponentPropsWithoutRef<"tr"> & {
	assignmentItem: AssignmentItemType;
};

const AssignmentItem: React.FC<AssignmentItemProps> = ({
	assignmentItem,
	className,
	...props
}) => {
	console.log(assignmentItem);
	return (
		<tr className={`cursor-pointer ${className}`} {...props}>
			<td>{assignmentItem.name}</td>
			<td>{}</td>
			<td className="flex justify-end">
				<div className="w-10 rounded-lg font-bold text-red-500 p-2">
					{assignmentItem.status[0]}
				</div>
				<div className="w-10 rounded-lg font-bold text-yellow-400 p-2">
					{assignmentItem.status[1]}
				</div>
				<div className="w-10 rounded-lg font-bold text-green-500 p-2">
					{assignmentItem.status[2]}
				</div>
			</td>
		</tr>
	);
};

export default AssignmentItem;

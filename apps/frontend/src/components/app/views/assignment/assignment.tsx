import styles from "./assignment.module.css";
import type { AssignmentViewport } from "../views.types";
import { useContext, useState } from "react";
import EssayTab from "./essayTab/essayTab";
import RubricTab from "./rubricTab/rubricTab";
import ViewportContext from "../viewportContext";

const Assignment: React.FC<AssignmentViewport> = ({ assignmentItem }) => {
	const [selectedTab, setSelectedTab] = useState<"essays" | "rubric">("essays");

	const viewportContext = useContext(ViewportContext);
	const handleReturnClick = () => {
		viewportContext.setViewport({ type: "assignmentListViewport", props: {} });
	};

	return (
		<div className={styles.assignment}>
			<div className={styles.assignment__header}>
				<button className={styles.assignment__back} onClick={handleReturnClick}>
					Go Back
				</button>
				<h2 className={styles.assignment__essayInfo}>{assignmentItem.name}</h2>
				<div className={styles.assignment__tabs}>
					<button
						className={`${styles.assignment__tabButton} ${selectedTab == "essays" && styles.assignment__tabButton_selected}`}
						onClick={() => setSelectedTab("essays")}
					>
						Essays
					</button>
					<button
						className={`${styles.assignment__tabButton} ${selectedTab == "rubric" && styles.assignment__tabButton_selected}`}
						onClick={() => setSelectedTab("rubric")}
					>
						Rubric
					</button>
				</div>
			</div>
			<div className="flex flex-col py-10 gap-6">
				{selectedTab == "essays" && <EssayTab essays={assignmentItem.essays} />}
				{selectedTab == "rubric" && <RubricTab rubric={assignmentItem.rubric} />}
			</div>
		</div>
	);
};

export default Assignment;

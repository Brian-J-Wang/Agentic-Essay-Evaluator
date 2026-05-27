import type { Rubric } from "shared/src/types";
import styles from "./rubricTab.module.css";

type RubricTabProps = {
	rubric: Rubric;
};

const RubricTab: React.FC<RubricTabProps> = ({ rubric }) => {
	return (
		<>
			{rubric.rubricItems.map((rubricItem, index) => (
				<div key={index} className={styles.rubricItem}>
					<div>
						<h3 className={styles.rubricItem__title}>{rubricItem.name}</h3>
						<p>{rubricItem.description}</p>
					</div>
					<div className={styles.rubricItem__conditions}>
						<div className={`${styles.rubricItem__condition} ${styles.rubricItem__condition_complete}`}>
							<h4 className={styles.rubricItem__conditionTitle}>Complete</h4>
							<p>{rubricItem.completeCondition}</p>
						</div>
						<div className={`${styles.rubricItem__condition} ${styles.rubricItem__condition_partial}`}>
							<h4 className={styles.rubricItem__conditionTitle}>Partial</h4>
							<p>{rubricItem.partialCondition}</p>
						</div>
						<div className={`${styles.rubricItem__condition} ${styles.rubricItem__condition_incomplete}`}>
							<h4 className={styles.rubricItem__conditionTitle}>Incomplete</h4>
							<p>{rubricItem.incompleteCondition}</p>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default RubricTab;

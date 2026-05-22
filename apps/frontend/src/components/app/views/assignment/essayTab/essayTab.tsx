import type { Essay } from "shared/src/types";
import styles from "./essayTab.module.css";

type EssayTabProps = {
	essays: Essay[];
};

const EssayTab: React.FC<EssayTabProps> = ({ essays }) => {
	return (
		<>
			<button className={styles.essay__addEssay}>Add Essay +</button>
			{essays.map((essay, index) => (
				<div key={essay.id} className={styles.essay__essay}>
					<div>
						<div className={styles.essay__info}>
							<h3 className={styles.essay__submission}>Submission {essays.length - index}</h3>
							<p className={styles.essay__dateCreated}>{essay.dateCreated.toLocaleDateString()}</p>
						</div>
						<div>
							<p>{essay.essaySummary}</p>
							<ul>
								{essay.actionItems.map((actionItem, index) => (
									<li key={index} className={styles.essay__actionItem}>
										{actionItem}
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className={styles.essay__status}>
						<button>Check Status</button>
					</div>
				</div>
			))}
		</>
	);
};

export default EssayTab;

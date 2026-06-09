import styles from "./newAssignmentModal.module.css";
import { useState } from "react";
import { newAssignmentSchema } from "@brwwang/shared/src/assignments/assignment.schemas";
import { type NewAssignment } from "@brwwang/shared/src/assignments/assignments.types";

type NewAssignmentModalProps = {
	onSubmit: (data: NewAssignment) => void;
};

const NewAssignmentModal: React.FC<NewAssignmentModalProps> = ({ onSubmit }) => {
	const [name, setName] = useState<string>("");
	const [rubric, setRubric] = useState<string>("");
	const [errors, setErrors] = useState<Record<string, string>>({});
	const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();

		const result = newAssignmentSchema.safeParse({
			name: name,
			rubric: rubric,
		});

		if (!result.success) {
			const fieldErrors: Record<string, string> = {};

			for (const issue of result.error.issues) {
				const fieldName = issue.path[0];

				if (typeof fieldName === "string") {
					fieldErrors[fieldName] = issue.message;
				}
			}

			setErrors(fieldErrors);
		} else {
			onSubmit(result.data);
		}
	};

	return (
		<>
			<h2 className={styles.modal__title}>New Assignment</h2>
			<form action="" className={styles.modal__form} onSubmit={handleFormSubmit}>
				<label htmlFor="name" className={styles.modal__label}>
					Assignment Name
				</label>
				<input
					type="text"
					name="name"
					className={styles.modal__input}
					value={name}
					onChange={(evt) => {
						setName(evt.target.value);
					}}
				/>
				{errors.name && <p>{errors.name}</p>}
				<label htmlFor="rubric" className={styles.modal__label}>
					Rubric
				</label>
				<textarea
					name="rubric"
					className={styles.modal__textarea}
					value={rubric}
					onChange={(evt) => {
						setRubric(evt.target.value);
					}}
				/>
				{errors.rubric && <p>{errors.rubric}</p>}
				<button type="submit" className={styles.modal__formSubmit}>
					Submit
				</button>
			</form>
		</>
	);
};

export default NewAssignmentModal;

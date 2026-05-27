import styles from "./newAssignmentModal.module.css";

const NewAssignmentModal = () => {
	const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const formData = new FormData(evt.currentTarget);
		console.log(formData.get("name"), formData.get("rubric"));
	};

	return (
		<>
			<h2 className={styles.modal__title}>New Assignment</h2>
			<form action="" className={styles.modal__form} onSubmit={handleFormSubmit}>
				<label htmlFor="name" className={styles.modal__label}>
					Assignment Name
				</label>
				<input type="text" name="name" className={styles.modal__input} />
				<label htmlFor="rubric" className={styles.modal__label}>
					Rubric
				</label>
				<input type="file" name="rubric" className={styles.modal__uploadFile} />
				<button type="submit" className={styles.modal__formSubmit}>
					Submit
				</button>
			</form>
		</>
	);
};

export default NewAssignmentModal;

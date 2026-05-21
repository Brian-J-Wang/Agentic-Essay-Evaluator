const NewAssignmentModal = () => {
	return (
		<>
			<h2>New Assignment</h2>
			<form action="">
				<div className="flex flex-col">
					<label htmlFor="">Assignment Name</label>
					<input type="text" name="name" />
				</div>
			</form>
		</>
	);
};

export default NewAssignmentModal;

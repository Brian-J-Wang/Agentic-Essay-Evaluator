const host = "localhost:90/api";

export function submitNewAssignment(data: FormData) {
	console.log(data);
	return fetch(host + "/assignment", {
		method: "POST",
		body: data,
	}).then((res) => {
		if (!res.ok) {
			throw new Error("Failed to submit new assignment");
		}

		return res.json();
	});
}

import type { Assignment } from "@brwwang/shared/src/assignments/assignments.types";
import { useEffect, useState } from "react";
import { env } from "src/config/env";

console.log(env);

const hostname = env.backendURL;

export const useUserAssignmentAPI = () => {
	const [assignments, _setAssignments] = useState<Assignment[]>([]);
	const [isloading, _setIsloading] = useState(true);
	const [error, _setError] = useState(false);

	useEffect(() => {
		fetch(`${hostname}/assignment`, {
			method: "GET",
		})
			.then((res) => {
				if (res.ok) {
					return res.json() as Promise<Assignment[]>;
				} else {
					return Promise.reject();
				}
			})
			.then((res) => {
				_setIsloading(false);
				_setAssignments(res);
			})
			.catch(() => {
				_setIsloading(false);
				_setError(true);
			});
	}, []);

	return {
		isloading,
		error,
		assignments,
		api: {},
	};
};

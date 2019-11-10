export const getFormattedTime = date => {
	let d = new Date(date);
	return d.toLocaleString();
};

export const postCalls = (url, method, data) => {
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(res => res.json());
};

export const isAuthenticated = () => {
	const idToken = localStorage.getItem('idToken')

	if (idToken) {
		return true;
	}
	return false;
};

export default isAuthenticated;

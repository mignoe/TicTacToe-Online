import axios from 'axios';

async function submitUserData(username, password, endpoint){
	const formData = new FormData()
	formData.append('username', username)
	formData.append('password', password)
	axios.post("http://localhost:5000" + endpoint, formData)
		.then(response => {
			console.log('Response:', response.data);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

export default submitUserData;


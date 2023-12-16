import axios from 'axios';

async function submitUserData(username, password){
	const formData = new FormData()
	formData.append('username', username)
	formData.append('password', password)
	axios.post("http://localhost:5000/login", formData)
		.then(response => {
			console.log('Response:', response.data);
		})
		.catch(error => {
			console.error('Error:', error);
		});
}

export default submitUserData;


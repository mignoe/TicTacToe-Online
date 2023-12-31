import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API_URL
  })

async function submitUserData(username, password, endpoint){
	const formData = new FormData()
	formData.append('username', username)
	formData.append('password', password)

	let result;
    console.log(instance.baseURL + endpoint)
	await instance.post(endpoint, formData)
    .then(response => {
        result = {
            status: response.status,
            data: response.data
        };
        console.log('Response:', response.data);
    })
    .catch(error => {
        result = {
            status: error.response.status,
            message: error.response.data
        };
        console.log('Error:', error);
    });

return result;

}

export default submitUserData;


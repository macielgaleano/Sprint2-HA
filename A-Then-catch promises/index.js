const sendHttpRequest = (method, url, data) => {
    return fetch(url, {
			method: method,
			body: JSON.stringify(data),
			headers: data ? {'Content-Type': 'application/json'} : {}
		})
     .then(res => {
         return res.json();
     })
     .then(responseData => {
				 console.log(responseData);
     });
};


const getData = () => {
	sendHttpRequest('GET', 'https://reqres.in/api/users/2')
		.then(response => {
		console.log(response);
		}).catch(err => {
				console.log(err)
		});
}

const sendData = () => {
	sendHttpRequest('POST', 'https://reqres.in/api/users/2', {
		email: 'macielgaleano@gmail.com',
		password: 'pistol'
	})
	.then( responseData => {
		console.log(responseData);
	})
	.catch( err => {
		console.log(err);
	})
}

sendData();
getData();
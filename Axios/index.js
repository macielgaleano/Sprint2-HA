const axios = require('axios').default;

function getData() {
    axios
        .get("https://reqres.in/api/users/2")
        .then((response) => {
            if(res.status == 200){
                console.log(response);
            }    
        }
    );
}

function setData(){
    axios
        .post("https://reqres.in/api/users/register", {
            email: 'macielgaleano@gmail.com',
            password: 'pistol'
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
} 

getData();
setData();








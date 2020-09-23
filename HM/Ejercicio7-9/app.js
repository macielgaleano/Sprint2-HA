const app_main_route = 'http://localhost:3000';

window.addEventListener('submit', (e) => {
  e.preventDefault();
  let nom1 = Number(document.querySelector('nom1'));
  let nom2 = Number(document.querySelector('nom2'));

  console.log(nom1, nom2);

  
  //   fetch("http://localhost:3000/multiplicar"
  //   ).then(response => {
  //   console.log(response);
  //   return response.json();
  // }).then(data => {
   

  //   console.log(data);
  // }).catch(err => {
  //   // Do something for an error here
  //   console.log("Error Reading data " + err);
  // });
});
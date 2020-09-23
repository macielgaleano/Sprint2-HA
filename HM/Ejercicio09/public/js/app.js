$('#multiplyForm').on('submit', function(e) {
  e.preventDefault(); //Evitar que la pagina se recargue

  var num1 = $('#num1').val();
  var num2 = $('#num2').val();

  console.log('si');

  $.ajax({
    url: `http://localhost:3000/multiplicar?num1=${num1}&num2=${num2}`,
    success: (result) => {
      $('#result').text(`el resultado es ${result}`);
    }
  })

});

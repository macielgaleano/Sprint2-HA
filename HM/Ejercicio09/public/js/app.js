$('multiplyForm').on('submit', function(e) {
  e.preventDefault(); //Evitar que la pagina se recargue

  const num1 = $(num1).val();
  const num2 = $(num2).val();

  $.ajax({
    url: `http://localhost:3000/multiplicar?${num1}&num2=${num2}`,
    success: () => {
      
    }
  })

});

alert('test');
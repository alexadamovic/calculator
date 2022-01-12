// Business logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

// user interface logic

$(document).ready(function() {
  $("button#btn-add").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#user-number1").val());
    const number2 = parseInt($("#user-number2").val());
    const result = add(number1, number2);
    console.log(result);
    $("#output").text(result);
  });

  $("button#btn-subtract").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#user-number1").val());
    const number2 = parseInt($("#user-number2").val());
    const result = subtract(number1, number2);
    console.log(result);
    $("#output").text(result); 
  });

  $("button#btn-multiply").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#user-number1").val());
    const number2 = parseInt($("#user-number2").val());
    const result = multiply(number1, number2);
    console.log(result);
    $("#output").text(result); 
  });

  $("button#btn-divide").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#user-number1").val());
    const number2 = parseInt($("#user-number2").val());
    const result = divide(number1, number2);
    console.log(result);
    $("#output").text(result); 
  });

  $("button#btn-clear").click(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#user-number1").val());
    const number2 = parseInt($("#user-number2").val());
    const result = add(number1, number2);
    console.log(result);
    $("#output").text(result); 
  });
});

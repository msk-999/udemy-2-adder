function addNumbers() {
  var firstNumber = document.getElementById('firstNumber').value;
  var secomdNumber = document.getElementById('secomdNumber').value;

  var result = Number(firstNumber) + Number(secomdNumber);

  ons.notification.toast('Result: ' + result, { timeout: 3000 });
}
function clearInputs() {
  document.getElementById('firstNumber').value = '';
  document.getElementById('secondNumber').value = '';
}

// Кнопки
var buttonInPerson = document.getElementById("in-person");
var buttonOutPerson = document.getElementById("out-person");
var buttonInMinus = document.getElementById("in-minus");
var buttonOutMinus = document.getElementById("out-minus");

// Счетчики
var countIn = 0;
var countOut = 0;

// Результаты
var resultIn = document.getElementById("result-in");
var resultOut = document.getElementById("result-out");

// При нажатии на кнопки входа/выхода изменять счетчик
buttonInPerson.onclick = function() {
  countIn += 1;
  resultIn.innerHTML = "In count: " + countIn;
};
buttonOutPerson.onclick = function() {
  countOut += 1;
  resultOut.innerHTML = "Out count: " + countOut;
};

// При нажатии на кнопки "-" вычетать из счетчика ошибочный клик
buttonInMinus.onclick = function() {
  countIn -= 1;
  resultIn.innerHTML = "In count: " + countIn;
};
buttonOutMinus.onclick = function() {
  countOut -= 1;
  resultOut.innerHTML = "Out count: " + countOut;
};

// Кнопки
var buttonInPerson = document.getElementById("in-person");
var buttonOutPerson = document.getElementById("out-person");
var buttonInMinus = document.getElementById("in-minus");
var buttonOutMinus = document.getElementById("out-minus");

// Вывод числа вошедших/вышедших
var resultIn = document.getElementById("result-in");
var resultOut = document.getElementById("result-out");


// Увеличение с помощью экранных кнопок
buttonInPerson.onclick = function() {
	var countIn = Number(document.getElementById("result-in").value);
	countIn += 1
  document.getElementById("result-in").value = countIn;
};
buttonOutPerson.onclick = function() {
  var countOut = Number(document.getElementById("result-out").value);
  countOut += 1;
  document.getElementById("result-out").value = countOut;
};
// Уменьшение с помощью экранных кнопок
buttonInMinus.onclick = function () {
  var countIn = Number(document.getElementById("result-in").value);
  countIn -= 1;
  document.getElementById("result-in").value = countIn;
};
buttonOutMinus.onclick = function () {
  var countOut = Number(document.getElementById("result-out").value);
  countOut -= 1;
  document.getElementById("result-out").value = countOut;
};


// Увеличение с помощью клавиатуры
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    var countIn = Number(document.getElementById("result-in").value);
    countIn += 1
    document.getElementById("result-in").value = countIn;
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowDown') {
    var countOut = Number(document.getElementById("result-out").value);
    countOut += 1;
    document.getElementById("result-out").value = countOut
  }
});
// Увеличение с помощью клавиатуры
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft') {
    var countIn = Number(document.getElementById("result-in").value);
    countIn -= 1
    document.getElementById("result-in").value = countIn;
    
  }
});
document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowRight') {
    var countOut = Number(document.getElementById("result-out").value);
    countOut -= 1;
    document.getElementById("result-out").value = countOut
  }
});

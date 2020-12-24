// Увеличение/уменьшение с помощью экранный кнопок
function increaseOrDecrease(elementId, operator) {
  let count = Number(document.getElementById(elementId).value);
  const result = operator == 'increase' ? count += 1 : count -= 1
  document.getElementById(elementId).value = count;
}

// Увеличение/уменьшение с помощью клавиатуры
document.addEventListener('keydown', function(event) {
  let countIn = Number(document.getElementById("result-in").value);
  let countOut = Number(document.getElementById("result-out").value);
  if (event.code == 'ArrowUp') {
    countIn += 1
  } else if (event.code == 'ArrowDown') {
    countOut += 1;
  } else if (event.code == 'ArrowLeft') {
    countIn -= 1
  } else if (event.code == 'ArrowRight') {
    countOut -= 1;
  }
  document.getElementById("result-in").value = countIn;
  document.getElementById("result-out").value = countOut;
});

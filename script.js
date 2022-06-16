function sum(num1, num2) {
  
  if (
    num1 == parseInt(num1) &&
    num2 == parseInt(num2) &&
    num1 >= 0 &&
    num2 >= 0
  ) {
    result = num1 + num2;
    return result
  } else {
    throw new Error(`Impossible to sum ${num1} + ${num2}`);
  }
}

document.getElementById("button").addEventListener("click", function () {
  document.getElementById("result").innerHTML = "";

  const num1 = Number(document.getElementById("1").value);
  const num2 = Number(document.getElementById("2").value);
  let result = sum(num1, num2)
  
  document.getElementById("result").innerHTML = result;
});

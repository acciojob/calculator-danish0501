let input = document.getElementById("input");
let expression = "";
function solve(e) {
  if (e === "ans") {
    //evaluate ans
    let result = eval(expression);
    console.log(result);
    input.value = result;
  } 
  else if (e === "clear") {
    expression = "";
    input.value = "0";
  } 
  else {
    expression += e;
    console.log(expression);
    input.value = expression;
  }
}

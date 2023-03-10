type StringOrNumber = string | number; //unión de tipos
type PlaceholderOperation = 'to-sum' | 'to-concat' // unión de tipos literales

function concatOrSumValues(value1:StringOrNumber, value2:StringOrNumber, placeholder:PlaceholderOperation = 'to-sum'):StringOrNumber {
  let res;
  if(placeholder === 'to-sum'){
    res = +value1 + +value2
  }else{
    res = value1.toString() +  value2.toString();
  }
  return res;
}

console.log(concatOrSumValues(2,2)); // 4
console.log(concatOrSumValues("2","2", 'to-concat')); // '22'
console.log(concatOrSumValues("3","3", 'to-concat')); // Argument of type 
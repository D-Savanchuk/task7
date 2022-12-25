// Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-е простое число - 13.
// Какое число является 10001-м простым числом?

let value = 14;
let valueArr = [2,3,5,7,11,13];
while(true){
  if (valueArr.some((item) => !(value % item))){
    ++value;
    continue;
  }
  valueArr.push(value)
  if(valueArr.length==10001) break;
}

console.log(valueArr[valueArr.length-1]);


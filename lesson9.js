let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
let a = [];
let b = [];
for (let c of arr) {
  if (c > 0) {
    a.push(c);
  } else {
    b.push(c);
  }
}
let sum = 0;
for (let val of b) {
  sum += val;
}
let res = [];
res.push(a.length, sum);
console.log(res);



const str = 'elephant';
console.log(str.slice(1 ,7));






let num = 5;
let loopNum = num;
let numbers = [];
numbers.push(num);
for(let i = 1; i <loopNum; i++){
  num--;
  numbers.push(num);
  console.log(numbers);
}






let str4 = "hello";
let arr1 = ["a", "e", "i", "o", "u"];
let arr2 = str4.split('');
let arr3 = [];
for (const item of arr2) {
  if (arr1.includes(item)){
  } else {
    arr3.push(item)
  }
}
let str2 = arr3.join('');
console.log(str2);


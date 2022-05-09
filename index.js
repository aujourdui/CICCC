//b)
const mySum = require("./mySum");

//c)
const myArr = [1, 5, 19, 8, 21];

//d)
const result = mySum(1, 2, 3, ...myArr);
console.log(result);

//e)
const mySecondArr = myArr.map((number) => number * 2);
console.log(mySecondArr);

//f)
const ave = () => {
  return mySum(...mySecondArr) / mySecondArr.length;
};
const filteredArray = mySecondArr.filter((number) => ave() < number);
console.log(filteredArray);

//g)
const goodBye = setTimeout(() => console.log("Good Bye"), 300);

//h)
const Employee = {
  name: "steve",
  email: "steve@gmail.com",
  department: "HR",
  startDate: "May",
};

const { department, startDate, ...Person } = Employee;

console.log(Person);

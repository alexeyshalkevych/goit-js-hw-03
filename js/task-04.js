"use strict";
/*  
Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму запрплаты работников и возращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

Вызовы функции для проверки работоспособности твоей реализации.
*/

const countTotalSalary = employees => {
  const valueInEmployees = Object.values(employees);
  let total = 0;

  // for (const employeValue of valueInEmployees) {
  //   total += employeValue;
  // }
  for (const employe in employees) {
    if (employees.hasOwnProperty(employe)) {
      total += employees[employe];
    }
  }

  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400

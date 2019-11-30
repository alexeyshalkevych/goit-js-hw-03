"use strict";
/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
  Функция возвращает число - количество свойств.
*/

const countProps = obj => {
  let count = 0;

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }

  return count;
};

// Вызовы функции для проверки

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

"use strict";
/*  
Напиши функцию calculateTotalPrice(arr, productName), которая 
получает массив объектов и имя продукта (значение свойства name). 
Возвращает общую стоимость продукта (цена * количество).
*/

const calculateTotalPrice = (arr, productName) => {
  for (const obj of arr) {
    if (obj.name === productName) {
      return obj.price * obj.quantity;
    }
  }
};

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800

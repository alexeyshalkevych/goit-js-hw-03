"use strict";
/*
  Напиши скрипт управления личным кабинетом интернет банка. 
  Есть объект account в котором необходимо реализовать методы 
  для работы с балансом и историей транзакций.
*/

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
    Метод писал сам, объясните пожалуйста насколькоданный 
    вариант генерации может быть приемлимым


   * Метод отвечающий за генерацию ID для обьектов
   * Проходит по длине массива транзакций и возвращает значение ID
   */
  genericId() {
    let countId = 1;

    for (let i = 0; i < this.transactions.length; i++) {
      countId++;
    }

    return countId;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const transactionObject = {
      id: this.genericId(),
      type: Transaction.DEPOSIT,
      amount: amount
    };

    this.balance += amount;
    this.addTransaction(transactionObject);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const transactionObject = {
      id: this.genericId(),
      type: Transaction.WITHDRAW,
      amount: amount
    };

    if (amount > this.balance) {
      console.log(`Снятие такой суммы не возможно, недостаточно средств.`);
    } else {
      this.balance -= amount;
      this.addTransaction(transactionObject);
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalAmountOfTypeTransaction = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalAmountOfTypeTransaction += transaction.amount;
      } else if (transaction.type === type) {
        totalAmountOfTypeTransaction += transaction.amount;
      }
    }

    return totalAmountOfTypeTransaction;
  }
};

account.deposit(300);
account.withdraw(250);
account.deposit(350);
account.withdraw(200);
account.deposit(100);
account.withdraw(50);

console.log(account.transactions);
console.log("Текущий баланс:", account.getBalance());

console.log(account.getTransactionDetails(4));

console.log(
  "Сумма транзакций оперции:",
  Transaction.DEPOSIT,
  account.getTransactionTotal(Transaction.DEPOSIT)
);
console.log(
  "Сумма транзакций оперции:",
  Transaction.WITHDRAW,
  account.getTransactionTotal(Transaction.WITHDRAW)
);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    account;
    owner;
    balance;
    constructor(owner) {
        this.account = this.generateAccountNumber();
        this.owner = owner;
        this.balance = 0;
    }
    generateAccountNumber() {
        const math = Math.floor(Math.random() * 100000000) + 1;
        return math;
    }
    info() {
        console.log(`Account: ${this.account}`);
        console.log(`Owner..: ${this.owner}`);
        console.log('-------------------------');
    }
    getBalance() {
        return this.balance;
    }
    deposit(value) {
        this.balance += value;
    }
    withdraw(value) {
        if (value <= this.balance) {
            this.balance -= value;
        }
        console.log('Saldo insuficiente!');
    }
}
class CpfAccount extends Account {
    cpf;
    constructor(owner, cpf) {
        super(owner);
        this.cpf = cpf;
    }
    info() {
        console.log(`Successfully during created CPF Account ${this.account}`);
        console.log(`Cpf....: ${this.cpf}`);
        super.info();
    }
    deposit(value) {
        if (value >= 10000) {
            console.log('Inválid balance');
        }
        super.deposit(value);
    }
}
class CnpjAccount extends Account {
    cnpj;
    constructor(owner, cnpj) {
        super(owner);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Successfully during created CPF Account ${this.account}`);
        console.log(`Cpf....: ${this.cnpj}`);
        super.info();
    }
    deposit(value) {
        if (value >= 1000000) {
            console.log('Inválid balance');
        }
        super.deposit(value);
    }
}
const cpf = new CpfAccount('Ruan', 123456);
const cnpj = new CnpjAccount('Agrohub', 12343093409);
cpf.deposit(1000);
cnpj.deposit(100000);
cpf.info();
cnpj.info();
//# sourceMappingURL=aula20.js.map
abstract class Account {
  protected account: number;
  protected owner: string;
  private balance: number;

  constructor(owner: string) {
    this.account = this.generateAccountNumber();
    this.owner = owner;
    this.balance = 0;
  }

  private generateAccountNumber(): number {
    const math = Math.floor(Math.random() * 100000000) + 1;
    return math;
  }

  protected info(): void {
    console.log(`Account: ${this.account}`);
    console.log(`Owner..: ${this.owner}`);
    console.log("-------------------------");
  }

  get getBalance(): number {
    return this.balance;
  }

  set setBalance(balance: number) {
    this.balance = balance;
  }

  protected deposit(value: number): void {
    this.balance += value;
  }

  protected withdraw(value: number): void {
    if (value <= this.balance) {
      this.balance -= value;
    }
  }
}

class CpfAccount extends Account {
  cpf: number;

  constructor(owner: string, cpf: number) {
    super(owner);
    this.cpf = cpf;
  }

  info() {
    console.log(`Successfully during created CPF Account ${this.account}`);
    console.log(`Cpf....: ${this.cpf}`);
    super.info();
  }

  public deposit(value: number): void {
    if (value >= 10000) {
      console.log("Inválid balance");
    }
    super.deposit(value);
  }

  public withdraw(value: number): void {
    if (value < 0) return;
    if (value > 1000) {
      console.log("Invalid value to withdraw");
    }
    super.withdraw(value);
  }
}

class CnpjAccount extends Account {
  cnpj: number;

  constructor(owner: string, cnpj: number) {
    super(owner);
    this.cnpj = cnpj;
  }

  info() {
    console.log(`Successfully during created CPF Account ${this.account}`);
    console.log(`Cpf....: ${this.cnpj}`);
    super.info();
  }

  public deposit(value: number): void {
    if (value >= 1000000) {
      console.log("Inválid balance");
    }
    super.deposit(value);
  }

  public withdraw(value: number): void {
    if (value < 0) return;
    if (value > 10000) {
      console.log("Invalid value to withdraw");
    }
    super.withdraw(value);
  }
}

const cpf = new CpfAccount("Ruan", 123456);
const cnpj = new CnpjAccount("Agrohub", 12343093409);

cpf.deposit(1000);
cnpj.deposit(100000);

cpf.withdraw(1000000);
cnpj.withdraw(1000000);

cpf.info();
cnpj.info();

cpf.setBalance = 900;

console.log(`Total balance: R\$ ${cpf.getBalance}`);
class Computer
{
    name: string = ''
    ram: number = 0
    cpu: number = 0
    on: boolean = true
}

const computer = new Computer()

computer.name = 'Acer Aspire 5'
computer.ram = 20
computer.cpu = 21
computer.on = true

console.log(computer)
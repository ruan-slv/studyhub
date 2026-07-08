class Computer {
    private name: string
    private ram: number
    private cpu: number
    private on: boolean

    constructor(name: string, ram: number, cpu: number, on?: boolean) {
        this.name = name
        this.ram = ram
        this.cpu = cpu
        this.on = on ?? false
    }

    info(): void {
        console.log('------------------')
        console.log(`Nome: ${this.name}`)
        console.log(`Ram.: ${this.ram}%`)
        console.log(`Cpu.: ${this.cpu}%`)
        console.log(`On..: ${this.on ? 'Yes' : 'No'}`)
        console.log('------------------')
    }

    turnOn(): void {
        this.on = true
    }

    turnOff(): void {
        this.on = false
    }

    upgradeRam(value: number): void {
        this.ram += value
        if (this.ram < 0 || this.ram > 100) {
            console.log('Warning!')
            this.turnOff()
        }
    }
}

const computer = new Computer('Lenovo', 20, 10)
computer.turnOn()
computer.upgradeRam(20)
computer.info()
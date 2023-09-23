class Computer {
    components: string[] = [];

    addComponent(component: string) {
        this.components.push(component);
    }

    showConfiguration() {
        console.log(`This computer has: ${this.components.join(', ')}`);
    }
}

const myComputer = new Computer();
myComputer.addComponent('16GB RAM');
myComputer.addComponent('1TB SSD');
myComputer.addComponent('Intel i7 Processor');
myComputer.showConfiguration();

///////////////////////////////////////////////////
///////////////////////////////////////////////////

interface ComputerDecorator_ {
    addComponent(component: string): void;
    showConfiguration(): void;
}

class DecoratedComputer_ implements ComputerDecorator_ {
    private computer: Computer;
    
    constructor(computer: Computer) {
        this.computer = computer;
    }

    addComponent(component: string) {
        this.computer.addComponent(component);
    }

    showConfiguration() {
        this.computer.showConfiguration();
    }
}

const myComputer_ = new Computer();
const decoratedComputer = new DecoratedComputer_(myComputer_);

decoratedComputer.addComponent('16GB RAM');
decoratedComputer.addComponent('1TB SSD');
decoratedComputer.addComponent('Intel i7 Processor');
decoratedComputer.showConfiguration();

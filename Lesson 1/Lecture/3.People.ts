abstract class Employee {
    name: string;
    age: number;
    salary: number;
    tasks: string[];
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    work() {
        const currentWork = this.tasks.shift();
        console.log(`${this.name} ${currentWork}`);
        this.tasks.push(currentWork!);
    }

    collectSalary() {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }

    getSalary() {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push("is working on a complicated task.");
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push("is taking time off work.");
        this.tasks.push("is supervising junior workers.");
    }

    work(): void {}

    collectSalary(): void {}
}

class Manager extends Employee {
    devidend: number;
    constructor(name: string, age: number) {
        super(name, age);
        this.devidend = 0;
        this.tasks.push("scheduled a meeting.");
        this.tasks.push("is preparing a quarterly report.");
    }

    getSalary(): number {
        return this.salary + this.devidend;
    }
}

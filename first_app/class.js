class Person {
    constructor() {
        this.zone = 'C.A';
        this.city = 'Estelí';
        this.country = 'Nicaragua';
    }
    greet() {
        console.log('Hello!!!');
    }
}
class Employee extends Person {
    //atributos
    //en el constructor ocurre un asignación de propiedades automáticas
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    //metodos
    showInfo() {
        console.log(`${this.name} ${this.dept} ${this.zone} ${this.city}`);
    }
}
const emp = new Employee(1, 'Tommy', 'Sales');
emp.greet();

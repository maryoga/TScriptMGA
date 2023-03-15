class Person {

    public zone = 'C.A';
    protected city = 'Estelí';
    private country = 'Nicaragua';

    constructor(){}

    greet(): void{        
        console.log('Hello!!!');
    }
}

class Employee extends Person {
    //atributos
    //en el constructor ocurre un asignación de propiedades automáticas
    constructor(private readonly id: number, private name: string, private dept: string) {
        super();
        this.showInfo();
    }

    //metodos
    private showInfo(): void {
        console.log(`${this.name} ${this.dept} ${this.zone} ${this.city}`);
    }

}

const emp = new Employee(1, 'Tommy', 'Sales');
emp.greet();







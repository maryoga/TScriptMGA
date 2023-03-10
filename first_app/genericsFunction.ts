//Generics - este diseño no es 100% escalable por que siempre tendriamos que estar agregando un nuevo tipo
interface Person {
    id:number;
    name: string;
}

interface Employee extends Person {
    role: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
}

//como aplicar generics a una interface, al implementar esta interface obligamos a una clase a que implemente un método
interface Data<T> {
    addItem(newItem: T): void;
}

class dataCollection<T extends { id: number, name: string } > implements Data<T> {
    private items: T[] = [];

    //este metodo estamos obligados a implementarlo porque estamos implementando su interfase en la clase dataCollection
    addItem(newItem: T): void {
        this.items.push(newItem);
    }

    getItems(): void {
        console.log(`List of items`, JSON.stringify(this.items));
    }

    getNames(): string[] {
        return this.items.map((item) => item.name);
    }

    getitemById(id: number): T | undefined {
        return this.items.find((item: T) => item.id === id)
    }
}

const productCollection = new dataCollection<Product>();

const newData2 = {
    id: 2,
    name: 'beer',
    price: 333
}

//Añadir una nueva persona
productCollection.addItem(newData2);
//visualizar el resultado - nueva persona agregada
productCollection.getItems();
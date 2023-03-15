class dataCollection {
    constructor() {
        this.items = [];
    }
    //este metodo estamos obligados a implementarlo porque estamos implementando su interfase en la clase dataCollection
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
    getNames() {
        return this.items.map((item) => item.name);
    }
    getitemById(id) {
        return this.items.find((item) => item.id === id);
    }
}
const productCollection = new dataCollection();
const newData2 = {
    id: 2,
    name: 'beer',
    price: 333
};
//Añadir una nueva persona
productCollection.addItem(newData2);
//visualizar el resultado - nueva persona agregada
productCollection.getItems();

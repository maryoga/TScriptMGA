var dataCollection = /** @class */ (function () {
    function dataCollection() {
        this.items = [];
    }
    //este metodo estamos obligados a implementarlo porque estamos implementando su interfase en la clase dataCollection
    dataCollection.prototype.addItem = function (newItem) {
        this.items.push(newItem);
    };
    dataCollection.prototype.getItems = function () {
        console.log("List of items", JSON.stringify(this.items));
    };
    dataCollection.prototype.getNames = function () {
        return this.items.map(function (item) { return item.name; });
    };
    dataCollection.prototype.getitemById = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    return dataCollection;
}());
var productCollection = new dataCollection();
var newData2 = {
    id: 2,
    name: 'beer',
    price: 333
};
//Añadir una nueva persona
productCollection.addItem(newData2);
//visualizar el resultado - nueva persona agregada
productCollection.getItems();

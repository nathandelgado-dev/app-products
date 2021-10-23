//The Product class
class Product {
    static countProduct = 0;

    constructor(name, price, date) {
        this._name = name;
        this._price = price;
        this._date = date;
        this._id = ++Product.countProduct;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this.name = name;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    get date() {
        return this._date;
    }

    set date(date) {
        this._date = date;
    }

    get id() {
        return this._id;
    }
}
export class Productos{
  name:string;
  category:string;
  brand:string;
  description:string;
  price:string;

  constructor(name:string, category:string, brand:string, description:string, price:string) {
    this.name=name;
    this.category = category;
    this.brand = brand;
    this.description = description;
    this.price = price;
  }
}


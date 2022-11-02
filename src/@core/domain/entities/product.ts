export type ProductProps = {
  id: number;
  name: string;
  description: string;
  stocks: number;
  price: number;
};
//Entidades
export class Product {
  constructor(public props: ProductProps) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get description() {
    return this.props.description;
  }

  get price() {
    return this.props.price;
  }

  get stocks() {
    return this.props.stocks;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      stocks: this.stocks,
      price: this.price,
    };
  }
}

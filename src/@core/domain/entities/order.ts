import { Product } from "./product";

export type OrderProps = {
    id?: number;
    products: Product[];
    pix_card_number: string;
}

export class Order{
    constructor (public props: OrderProps){}
    
    get id(){    
        return this.props.products;
    }

    get products(){
        return this.props.products
    }

    get pix_card_number(){
        return this.props.pix_card_number
    }

    get total(){
        return this.props.products.reduce(
            (total, product) => total + product.price,0
        );
    }
    toJSON(){
        return {
            id: this.id,
            products: this.products.map((product) => product.toJSON()),
            pix_card_number: this.pix_card_number,
        }
    }
}
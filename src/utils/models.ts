export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    img: any;
};

export type Order = {
    id: number;
    products: Product[];
    pix_card_number: string;
};
import { Product } from "../entities/product"
//comunicacao Extena

export interface ProductGateway{
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;

}
import { Cart } from "../entities/cart";
// responsável pelo armazenamento
export interface CartGateway{
    get(): Cart;
    save(cart: Cart): void;
}
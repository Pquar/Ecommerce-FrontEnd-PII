import { injectable } from 'inversify';
import { Cart } from '../../domain/entities/cart';
import { CartGateway } from './../../domain/gateways/cart.gateway';
import { Product } from '../../domain/entities/product';

@injectable()
export class CartLocalStorageGateway implements CartGateway {
  private readonly CART_KEY = 'cart';
  get(): Cart {
    const products = JSON.parse(localStorage.getItem(this.CART_KEY) || '[]');
    return new Cart({
      products: products.map(
        (p: any) =>
          new Product({
            id: products.id,
            name: products.name,
            description: p.description,
            price: p.price,
            stocks: p.stocks,
          })
      ),
    });
  }
  save(cart: Cart): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(cart.products));
  }
}

import { Product } from '../../domain/entities/product';
import { Order } from '../../domain/entities/order';
import { OrderGateway } from '../../domain/gateways/order.gateway';
import { CartGateway } from '../../domain/gateways/cart.gateway';

export class ProcessOrderUseCase {
  constructor(private orderGate: OrderGateway, private cartGate: CartGateway) {}

  async execute({
    products,
    pix_card_number,
  }: {
    products: Product[];
    pix_card_number: string;
  }) {
    const order = new Order({
      products,
      pix_card_number,
    });
    const newOrder = await this.orderGate.insert(order);
    const cart = this.cartGate.get();
    cart.clear();
    this.cartGate.save(cart);
    return newOrder;
  }
}

import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useContext } from 'react';
import { CartContext } from '../../context/cart.provider';
import { http } from '../../utils/http';
type Props = {};

export const CheckoutPage: NextPage = (props: Props) => {
  const cartContext = useContext(CartContext);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const pix_card_number = event.currentTarget.pix_card_number.value;
    const { data: order } = await http.post('orders', {
      products: cartContext.products,
      pix_card_number,
    });
    router.push(`/checkout/${order.id}/success`);
  }

  return (
    <div>
      <h3>Meu Carrinho</h3>
      <ul>
        {cartContext.products.map((product) => (
          <li key={product.id}>
            Produto {product.name} - {product.price}
            <button onClick={() => cartContext.removeProduct(product)}>
              removeProduct
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Pix</label>
          <input type="text" name="pix_card_number" id="pix_card_number" />
        </div>
        <div>
          <button type="submit">Comprar</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;

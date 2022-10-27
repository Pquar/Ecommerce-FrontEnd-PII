import { NextPage } from 'next';
import { FormEvent, useContext } from 'react';
import { CartContext } from '../../context/cart.provider';
type Props = {};

export const CheckoutPage: NextPage = (props: Props) => {
  const cartContext = useContext(CartContext);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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

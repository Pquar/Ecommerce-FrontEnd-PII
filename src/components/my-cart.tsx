import { useContext } from 'react';
import { CartContext } from '../context/cart.provider';
type Props = {};
export const Mycart = (props: Props) => {
  const cartContext = useContext(CartContext);
  return (
    <nav>
      Cart - Total {cartContext.total}| Itens {cartContext.products.length}
    </nav>
  );
};

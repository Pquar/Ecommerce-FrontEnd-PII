import { useContext } from 'react';
import { CartContext } from '../context/cart.provider';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/NavBar.module.css';
type Props = {};
export const Mycart = (props: Props) => {
  const cartContext = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bd-navbar  green text-white bd-gutter flex-wrap flex-lg-nowrap --primary">
      <div className=" container-xxl container-fluid">
        <a className="navbar-brand d-block">
          <Link className="d-block" href="/" legacyBehavior>
            <img src="https://img.icons8.com/small/32/000000/cottage.png" />
          </Link>
        </a>
        <li className="d-block">
          <a>
            <img src="https://img.icons8.com/color/48/000000/banknotes.png" />
            {cartContext.cart.props.products.reduceRight((total, product) => {
              return total + product.props.price;
            }, 0)}{' '}
          </a>
        </li>
        <li className="d-block">
          <img src="https://img.icons8.com/small/32/000000/dropbox.png" />
          {cartContext.cart.products.length}
        </li>
        <li className="d-block">
          <Link href="/checkout" legacyBehavior>
            <img src="https://www.cookfood.net/Content/images/basket2.png" />
          </Link>
        </li>
        <li className="display-block">
          <Link className="text-white" href="/login" legacyBehavior>
            <img src="https://img.icons8.com/color/48/000000/gender-neutral-user.png" />
          </Link>
        </li>
      </div>
    </nav>
  );
};

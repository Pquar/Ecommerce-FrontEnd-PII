import type { AppProps } from 'next/app';
import { Mycart } from '../components/my-cart';
import { CartProvider } from '../context/cart.provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Mycart />
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;

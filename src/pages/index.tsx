import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { http } from '../utils/http';
import { Product } from '../utils/models';

type HomeProps = {
  products: Product[];
};

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <div>
      <h1>Ecomearsce</h1>
      <ul>
        {products.map((product, key) => (
          <li key={key}>
            <label>nome:</label> {product.name} |
            <Link legacyBehavior href={`/products/${product.id}`}>
              <a href="">Ver</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
//getServerSideProps fala para o react que a pagina renderiza e dinamica
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: products } = await http.get('products');

  return {
    props: {
      products,
    },
  };
};

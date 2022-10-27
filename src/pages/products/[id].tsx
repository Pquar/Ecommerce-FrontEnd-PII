import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useContext } from 'react';
import { http } from '../../utils/http';
import { Product } from '../../utils/models';
import { CartContext } from '../../context/cart.provider';

type ProductDetailPageProps = {
  product: Product;
};
export const ProductDetailPage: NextPage<ProductDetailPageProps> = ({
  product,
}) => {
  const cartContext = useContext(CartContext);
  return (
    <div>
      <h3>{product.name}</h3>
      <label>Price</label> {product.price}
      <button onClick={() => cartContext.addProduct(product)}>
        Adicionar no carrinho
      </button>
    </div>
  );
};
export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    //loading true ou `blocking`
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};
  const { data: product } = await http.get(`products/${id}`);
  return {
    props: {
      product,
    },
  };
};

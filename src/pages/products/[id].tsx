import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.provider';
import { container, Registry } from '../../@core/infra/container-registry';
import { GetProductUseCase } from '../../@core/application/product/get-product.use-case';
import { Product, ProductProps } from '../../@core/domain/entities/product';

type ProductDetailPageProps = {
  product: ProductProps;
};
export const ProductDetailPage: NextPage<ProductDetailPageProps> = ({
  product,
}) => {
  const productEntity = new Product({ ...product });
  const cartContext = useContext(CartContext);
  return (
    <div className='main'>
    <div className="container-xxl mt-4">
      <div className="row">
        <div className="col-md-6 card-01">
          <div className="card p-3  ">
            <img
              className="card-img-top"
              src="http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg"
              alt="Card image cap"
            />
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className=" p-3">
            <h4 className="card-text">{product.name}</h4>
            <p>Preço: R${product.price}</p>
            <p>Descrição: {product.description}</p>
            <p>Quantidade do Produto: {product.stocks}</p>
            <button
              className="add-to-cart btn btn-warning bg-warning"
              onClick={() => cartContext.addProduct(productEntity)}
            >
              Adicionar no carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
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
  const useCase = container.get<GetProductUseCase>(Registry.GetProductUseCase);
  const product = await useCase.execute(+id!);
  // antigo modo que foi substituído por useCase e const { data: product } = await http.get(`products/${id}`);
  return {
    props: {
      product: product.toJSON(),
    },
    // coloca a pagina para gerar a cada 20s novas pagina caso tenha novos itens //revalidate: 20,
  };
};

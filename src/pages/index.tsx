import type { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import { ListProductsUseCase } from '../@core/application/product/list-products.use-case';
import { ProductProps } from '../@core/domain/entities/product';
import { container, Registry } from '../@core/infra/container-registry';
import Image from 'next/image';
import '../styles/snipers.module.css';
type HomeProps = {
  products: ProductProps[];
};

const Home: NextPage<HomeProps> = ({ products }) => {
  return (
    <div className='main'>
      <h2 className="text-center mt-4">Itens da Loja</h2>
      <div className="container-xxl mt-4">
        <div className="row">
          {products.map((product, key) => (
            <div className="col-auto" key={key}>
              <div className="card card-01 tm-card p-3">
                <div className="card-block text-center">
                  <img
                    className="card-img-top"
                    src="http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg"
                    alt="Card image cap"
                  />
                  <h4 className="card-title">{product.name}</h4>
                  <p className="card-text">Preco: R${product.price}</p>
                  <Link href={`/products/${product.id}`} legacyBehavior>
                    <a className="add-to-cart btn bg-warning " href="">
                      Adicionar ao Carrinho
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
//getServerSideProps fala para o react que a pagina renderiza e dinamica

export const getServerSideProps: GetServerSideProps = async (context) => {
  const useCase = container.get<ListProductsUseCase>(
    Registry.ListProductsUseCase
  );
  const products = await useCase.execute();
  //shered
  return {
    props: {
      products: products.map((products) => products.toJSON()),
    },
  };
};

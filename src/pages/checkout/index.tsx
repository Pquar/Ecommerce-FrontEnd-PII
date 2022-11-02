import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { FormEvent, useContext } from 'react';
import { ProcessOrderUseCase } from '../../@core/application/order/process-orden.use-case';
import { container, Registry } from '../../@core/infra/container-registry';
import { CartContext } from '../../context/cart.provider';
type Props = {};

export const CheckoutPage: NextPage = (props: Props) => {
  const cartContext = useContext(CartContext);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const pix_card_number = event.currentTarget.pix_card_number.value;
    const processOrderUseCase = container.get<ProcessOrderUseCase>(
      Registry.ProcessOrderUseCase
    );
    const order = await processOrderUseCase.execute({
      products: cartContext.cart.products,
      pix_card_number,
    });

    cartContext.reload();
    router.push(`/checkout/${order.id}/success`);
  }

  return (
    <div className="cart main">
      <div className="container">
        <h1 className="text-center mt-4">Meu Carrinho</h1>
        <div className="col-12">
          {cartContext.cart.products.map((product) => (
            <div className="row " key={product.id}>
              <div className="col card col-8">
                <h4 className="card-title">{product.name}</h4>{' '}
                <a id="product-description"> {product.description}</a>
                <p className="card-text">R${product.price}</p>
              </div>
              <div className=" col-4">
                <div className="card p-3">
                  <button
                    className="add-to-cart btn col-md-12 bg-warning"
                    onClick={() => cartContext.addProduct(product)}
                  >
                    Adicionar produto
                  </button>
                  <button
                    className="add-to-cart btn btn-danger mt-2"
                    onClick={() => cartContext.removeProduct(product.id)}
                  >
                    Remover Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <form
        id="Checkout"
        className="row-auto px-0 container"
        onSubmit={onSubmit}
      >
        <div className="card col-auto px-4 p-4 align-items-center">
          <label htmlFor="" className='col-12'>Forma de Pagamento</label>
          <input type="text" name="pix_card_number" id="pix_card_number" className='col-12'/>
          <label htmlFor=""className='col-12'>Endereço</label>
          <input type="text" name="pix_card_number" id="pix_card_number" className='col-12'/>
          <button
            className="mt-4 col-4 btn bg-warning  text-uppercase"
            type="submit"
          >
            Solicitar
          </button>
        </div>

        <div></div>
      </form>
    </div>
  );
};

export default CheckoutPage;

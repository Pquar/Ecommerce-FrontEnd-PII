import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { http } from '../../../utils/http';
import { Order } from '../../../utils/models';
type CheckoutSuccessPageProps = {
  order: Order;
};

export const CheckoutSuccessPage: NextPage<CheckoutSuccessPageProps> = ({
  order,
}) => {
  return (
    <div className='main'>
      <div className='container card text-center'>

      
      <h3 className='mt-4'>Sua solicitação foi realizada</h3>
      <div className='mt-2 p-4'>
        <h4 className='card-title'>Lista de produtos</h4>
        {order.products.map((product) => (
          <div key={product.id}>
            Produto {product.name} - {product.price}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
export default CheckoutSuccessPage;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
        fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
 const { id } = context.params || {};
 const { data: order } = await http.get(`orders/${id}`);
return {
   props: {
     order,
  },
  };
};

import * as React from 'react';

type Props = {};
export const Dashboard = (props: Props) => {
  return (
    <div className="container card-body main">
      <div className="row">
        <div className="card col-12 col-md-2 p-2 ">
          <div className="row row-cols-2 justify-content-center">
            <h5 className="col-5">Nome</h5>
            <p className="col-7">Usuário</p>
            <h5 className="col-5">Tipo/User</h5>
            <p className="col-7">Agricultor</p>
            <a
              href="/adicionarproduto"
              className=" btn btn-warning col align-self-center"
            >
              Adicionar produto
            </a>
          </div>
        </div>

        <div className="col-md-9 col-12">
          <div className="card list-group text-center ">
            <table className="table ">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Produto</th>
                  <th scope="col">Preço</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="col">Id</td>
                  <td>Produto</td>
                  <td>Preço</td>
                  <td>Quantidade</td>
                  <td>Descrição</td>
                  <td>Foto</td>
                  <td>Categoria</td>
                  <td className="text-success">Status</td>
                </tr>
                <tr>
                  <td scope="col">Id</td>
                  <td>Produto</td>
                  <td>Preço</td>
                  <td>Quantidade</td>
                  <td>Descrição</td>
                  <td>Foto</td>
                  <td>Categoria</td>
                  <td className="text-success">Status</td>
                </tr>
                <tr>
                  <td scope="col">Id</td>
                  <td>Produto</td>
                  <td>Preço</td>
                  <td>Quantidade</td>
                  <td>Descrição</td>
                  <td>Foto</td>
                  <td>Categoria</td>
                  <td className="text-success">Status</td>
                </tr>
                <tr>
                  <td scope="col">Id</td>
                  <td>Produto</td>
                  <td>Preço</td>
                  <td>Quantidade</td>
                  <td>Descrição</td>
                  <td>Foto</td>
                  <td>Categoria</td>
                  <td className="text-success">Status</td>
                </tr>
                <tr>
                  <td scope="col">Id</td>
                  <td>Produto</td>
                  <td className="">Preço</td>
                  <td className="">Quantidade</td>
                  <td className="">Descrição</td>
                  <td className="">Foto</td>
                  <td className="">Categoria</td>
                  <td className="text-danger">Status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

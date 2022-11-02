import * as React from 'react';

type Props = {};

export const adicionarProduto = (props: Props) => {
  return (
    <div className="container card card-body main">
      <div className="row">
        <form className="input-group row justify-content-md-center mb-3  text-center ">
          <h5 className="col-title p-4 ">Novo Produto</h5>
          <div className="col-md-8 form-floating mb-4 align-middle">
            <input
              type="Produto"
              className="form-control "
              id="floatingInputProduct"
              placeholder="Nome do Produto"
            />
            <label className="ms-2" htmlFor="floatingInputProduct">
              Nome do Produto
            </label>
          </div>
          <div className="col-md-8 form-floating mb-4 align-middle">
            <input
              type="Price"
              className="form-control"
              id="floatingInputPrice"
              placeholder="Preço"
            />
            <label className="ms-2" htmlFor="floatingInputPrice">
              Preço
            </label>
          </div>
          <div className="form-floating col-md-8 mb-4 ">
            <input
              type="Description"
              className=" form-control"
              id="floatingDescription"
              placeholder="Quantidade"
            />
            <label className="ms-2" htmlFor="floatingInputDescription">
              Descrição
            </label>
          </div>
          <div className="form-floating col-md-8 mb-4 ">
            <input
              type="Stocks"
              className=" form-control"
              id="floatingPassword"
              placeholder="Quantidade"
            />
            <label className="ms-2" htmlFor="floatingInputStocks">
              Quantidade
            </label>
          </div>
          <div className="form-floating col-md-8 mb-4">
            <select className="form-select p-1 px-2" id="inlineFormSelectPref">
              <option value="1">Unidade/Un</option>
              <option value="2">Kilograms/Kg</option>
            </select>
          </div>
          <div className="form-floating col-md-8 mb-4">
            <select className="form-select p-1 px-2" id="inlineFormSelectPref">
              <option selected>Tipo do Produto</option>
              <option value="1">Outros</option>
              <option value="2">Frutas</option>
              <option value="3">Legumes</option>
              <option value="4">Verduras</option>
            </select>
          </div>
          <div className="form-floating col-md-8">
            <div className="mb-3 text-left">
              <label htmlFor="formFile" className="form-label">
                Escolha a Foto do seu Produto
              </label>
              <input className="form-control" type="file" id="formFile" />
            </div>
          </div>
          <div className="mt-4">
            <a href="/dashboard" className="btn btn-warning col-8">
              Adicionar
            </a>
          </div>
        </form>
        <div className="row justify-content-md-center mb-3">
          <a href="/dashboard" className="text-warning col-8">
            Voltar
          </a>
        </div>
      </div>
    </div>
  );
};

export default adicionarProduto;

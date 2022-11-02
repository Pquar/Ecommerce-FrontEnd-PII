import * as React from 'react';
import styles from '../styles/Cadastro.module.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
type Props = {};

export const Cadastro = (props: Props) => {
  return (
    <div className="container card-body main">
      <form className="input-group row justify-content-md-center mb-3  text-center ">
        <h5 className="col-title p-4 ">Formulário de Cadastro</h5>
        <div className="col-md-8 form-floating mb-4 align-middle">
          <input
            type="email"
            className="  form-control "
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label className="ms-2" htmlFor="floatingInput">
            Endereço de email
          </label>
        </div>
        <div className="col-md-8 form-floating mb-4 align-middle">
          <input
            type="email-check"
            className="  form-control"
            id="floatingInput-email-check"
            placeholder="name@example.com"
          />
          <label className="ms-2" htmlFor="floatingInput-email-check">
            Confirmar email
          </label>
        </div>
        <div className="form-floating col-md-8 mb-4 ">
          <input
            type="password"
            className=" form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label className="ms-2" htmlFor="floatingPassword">
            Sua senha
          </label>
        </div>
        <div className="form-floating col-md-8 mb-4 ">
          <input
            type="password-check"
            className=" form-control"
            id="floatingPassword"
            placeholder="Password-check"
          />
          <label className="ms-2" htmlFor="floatingPassword-check">
            Confirmar Senha
          </label>
        </div>

        <div className="form-floating col-md-8">
          <label className="visually-hidden" htmlFor="inlineFormSelectPref">
            Preference
          </label>
          <select className="form-select p-1 px-2" id="inlineFormSelectPref">
            <option selected>Você e...</option>
            <option value="1">Agricultor/Vendedor</option>
            <option value="2">Comprador</option>
          </select>
        </div>

        <div className="mt-4">
          <a href="/dashboard" className="btn btn-warning col-8">
            Logar
          </a>
        </div>
      </form>
      <div className="row justify-content-md-center mb-3">
        <p className="col-md-8">
          Não tem conta?
          <a href="/cadastro" className="text-warning col-8">
            Registrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Cadastro;

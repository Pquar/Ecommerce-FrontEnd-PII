import * as React from 'react';

type Props = {};

export const Login = (props: Props) => {
  return (
    <div className="container card-body main">
      <form className="row justify-content-md-center mb-3  text-center ">
        <h5 className="col-title p-4 ">Formulário</h5>
        <div className="col-md-8 form-floating mb-4 align-middle">
          <input
            type="email"
            className="  form-control "
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label className="ms-2" htmlFor="floatingInput ">
            Endereço de email
          </label>
        </div>
        <div className="form-floating col-md-8">
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

export default Login;

type Props = {};
export const Footer = (props: Props) => {
  return (
    <footer className="card-footer text-muted footer text-center">
      <div className="">
        All rights reserved.
        <a className="text-success" href="/">
          Stragreen
        </a>
      </div>
      <div>
        Projeto integrador do{' '}
        <a className="text-primary" href="https://www.linkedin.com/in/cleiton-araujo-moura/">
          Cleiton Araujo Moura
        </a>
      </div>
    </footer>
  );
};

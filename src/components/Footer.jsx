import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white pb-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 container-center">
        <div>
          <h2 className="text-lg font-bold">Brasil Fuds</h2>
          <p>Descrição da logo se fornecida.</p>
        </div>
        <div>
          <h3 className="font-semibold">Navegação</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
            <li>
              <a href="/servicos">Serviços</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Contato</h3>
          <p>Email: email@exemplo.com</p>
          <p>Telefone: (XX) XXXXX-XXXX</p>
          <p>Endereço se fornecido.</p>
        </div>
        <div>
          <h3 className="font-semibold">Conecte-se</h3>
          <ul>
            <li>
              <a href="#">Rede Social 1</a>
            </li>
            <li>
              <a href="#">Rede Social 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>
          © 2024 Criado com{' '}
          <a href="https://papum.ai" target="_blank" rel="noopener noreferrer">
            <em>Papum</em>
          </a>
        </p>
      </div>
    </footer>
  );
}

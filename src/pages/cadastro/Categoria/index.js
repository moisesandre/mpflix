import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
    return(
      <PageDefault>
      <h1>
        Cadastre sua categoria
      </h1>

      <Link to="/">
        ir para Home
      </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;
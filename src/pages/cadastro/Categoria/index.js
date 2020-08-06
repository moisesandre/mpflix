import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    //chave: nome, descricao
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infoEvento){
    const {getAttribute, value}= infoEvento.target;
    setValue(
      getAttribute('name'),
      value
    );
  }

    return(
      <PageDefault>
      <h1>
        Cadastro de categoria: {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais)
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input 
            type="text"
            value = {values.nome}
            name="nome"
            onChange={handleChange}
            />
          </label>
          </div>
          
          <div>
          <label>
            Descrição:
            <textarea 
            type="text"
            value = {values.descricao}
            name="descricao"
            onChange={handleChange}
            />
          </label>
          </div>
          
          <div>
          <label>
            Cor:
            <input 
            type="color"
            value = {values.cor}
            name="cor"
            onChange={handleChange}
            />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) =>{
          return(
            <li key={`${categoria} ${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        ir para Home
      </Link>
      </PageDefault>
    )
  }

export default CadastroCategoria;
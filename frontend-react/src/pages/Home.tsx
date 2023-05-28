import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/cadastro-empresa');
  }

  return (
    <button type="button" onClick={handleClick}>
      Cadastro empresa
    </button>
  );
}

export default Home;

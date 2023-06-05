import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/cadastro-empresa');
  }

  return (
    <Button variant="contained" onClick={handleClick}>
      Cadastro empresa
    </Button>
  );
}

export default Home;

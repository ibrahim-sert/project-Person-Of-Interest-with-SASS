import   "./NotFound.scss"
import { useNavigate } from 'react-router-dom';
import errorImg from "../../assets/404.svg"
const NotFound = () => {
      const navigate = useNavigate();
  return (
    <div className="container">
      <img className="w-25" src={errorImg} width="358px" alt="" />
      <div className="box">
        <button className="Buton_home" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="Buton_back" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound
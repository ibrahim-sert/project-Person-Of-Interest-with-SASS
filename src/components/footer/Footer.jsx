import { FiTwitter } from "react-icons/fi";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import "./Footer.scss";


const Footer = () => {
  const location = useLocation()
  console.log(location.pathname);

  let d = "";
  if(location.pathname==="/projects"){
    d = "vertical";
  }
  else if (location.pathname === "/about") {
    d = "vertical";
  } else if (location.pathname === "/contact") {
    d = "middle";
  } else {
    d = "horizontal";
  }


  return (
    <footer className={d}>
      <div className="social-icons">
        <Link to="#">
          <FiTwitter size={40} />
        </Link>
        <Link to="#">
          <IoLogoFacebook size={40} />
        </Link>
        <Link to="#">
          <IoLogoInstagram size={40} />
        </Link>
        <Link to="#">
          <VscGithub size={40} />
        </Link>
      </div>
      <div className="copyright">&copy; Copyright 2023</div>
    </footer>
  )
}

export default Footer
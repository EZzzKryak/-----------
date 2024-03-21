import { Link } from "react-router-dom";
import cls from "./Logo.module.scss";

const Logo = () => {
  return <Link to='/' className={cls.link}>
    <h1 className={cls.logo}>QPICK</h1>
    </Link>;
};

export default Logo;

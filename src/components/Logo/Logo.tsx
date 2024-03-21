import { Link } from "react-router-dom";
import cls from "./Logo.module.scss";
import { memo } from "react";

const Logo = memo(() => {
  return <Link to='/' className={cls.link}>
    <h1 className={cls.logo}>QPICK</h1>
    </Link>;
});

export default Logo;

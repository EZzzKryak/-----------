import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import cls from "./Footer.module.scss";
import NavLinks from "../NavLinks/NavLinks";
import Language from "../Language/Language";
import Messengers from "../Messengers/Messengers";
import { memo } from "react";

const Footer = memo(() => {
  return (
    <footer className={cls.footer}>
      <div className={cls.footerWrapper}>
        <Logo />
        <NavLinks />
        <div className={cls.wrapper}>
          <NavLink className={({ isActive }) => isActive ? cls.activeLink : cls.link} to='/terms'>Условия сервиса</NavLink>
          <Language />
        </div>
        <Messengers />
      </div>
    </footer>
  );
});

export default Footer;

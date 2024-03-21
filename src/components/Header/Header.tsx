import { memo } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import cls from "./Header.module.scss";

const Header = memo(() => {
  return (
    <header className={cls.header}>
      <Logo />
      <Navbar />
    </header>
  );
});

export default Header;

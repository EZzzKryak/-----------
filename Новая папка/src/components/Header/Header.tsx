import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import cls from "./Header.module.scss";

const Header = () => {
  return (
    <div className={cls.header}>
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;

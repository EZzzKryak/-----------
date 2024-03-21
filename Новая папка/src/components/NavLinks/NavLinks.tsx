import { NavLink } from "react-router-dom";
import cls from './NavLinks.module.scss';

const NavLinks = () => {
    return (
        <ul className={cls.links}>
            <li><NavLink className={({ isActive }) => isActive ? cls.activeLink : cls.link} to={'/favorites'}>Избранное</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? cls.activeLink : cls.link} to='/cart'>Корзина</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? cls.activeLink : cls.link} to='/contacts'>Контакты</NavLink></li>
        </ul>
        );
};

export default NavLinks;
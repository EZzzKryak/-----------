import cls from './Favorites.module.scss';

const Favorites = () => {
    return (
        <section className={cls.favorites}>
            <h2 className={cls.favoritesHeader}>Избранное</h2>
        </section>
    );
};

export default Favorites;
import { memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = memo(() => {
    const navigate = useNavigate();
    return (
        <section style={{height: '100%', marginTop: '20%'}}>
            <h2>
            Ошибка 404
            </h2>
            <p>Страница не найдена</p>
            <Link to="">
                <button onClick={() => navigate(-1)}>
                    Назад
                </button>
            </Link>
        </section>
    );
});

export default NotFoundPage;
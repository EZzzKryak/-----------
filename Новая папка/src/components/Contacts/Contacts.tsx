import { Link } from 'react-router-dom';
import cls from './Contacts.module.scss';
import { FullscreenControl, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

const Contacts = () => {

    return (
        <div className={cls.contacts}>
            <section className={cls.content}>
                <h2 className={cls.contactsHeader}>О нас</h2>
                <p className={cls.contactsText}><strong>QPICK</strong> - это ваш лучший выбор для качественных наушников. Мы предлагаем широкий ассортимент наушников различных брендов и типов, включая беспроводные, проводные, наушники с шумоподавлением и многое другое. Наши продукты отвечают высоким стандартам качества и обеспечивают удовлетворение всех ваших потребностей в прослушивании музыки, игре и общении.</p>
            </section>
            
            <section className={cls.content}>
                <h2 className={cls.contactsHeader}>Контакты</h2>
                <p className={cls.contactsText}>Мы всегда готовы помочь вам с выбором наушников и ответить на любые ваши вопросы. Свяжитесь с нами для получения дополнительной информации:</p>
                <ul className={cls.contactsList}>
                    <li>Email: <Link className={cls.links} to='mailto:info@headphoneshop.com'>info@headphoneshop.com</Link></li>
                    <li>Телефон: <Link className={cls.links} to='tel:+1 (123) 456-7890'>+1 (123) 456-7890</Link></li>
                    <li>Адрес: Россия, г. Примерный, ул. Примерная, д. 1</li>
                </ul>
            </section>

            <Map className={cls.map} defaultState={{ center: [55.80, 37.58], zoom: 11 }}>
                <FullscreenControl />
                {/* @ts-ignore */}
                <ZoomControl options={{ float: "right" }} />
                <Placemark geometry={[55.7984223966109, 37.580309732444334]} />
            </Map>
        </div>
    );
};

export default Contacts;
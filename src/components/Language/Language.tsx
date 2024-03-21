import { memo } from 'react';
import cls from './Language.module.scss';

const Language = memo(() => {
    return (
        <div className={cls.langWrapper}>
            <div className={cls.langLogo} />
            <button className={cls.lang}>Рус</button>
            <button className={cls.lang}>Eng</button>
        </div>
    );
});

export default Language;
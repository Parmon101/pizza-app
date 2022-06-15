import React from 'react';
import styles from './NotFoundDate.module.scss';

export const NotFoundDate: React.FC = () => {
    const res = 1;
    return (
        <div className={styles.root}>
            <h1>
                <span>🥲</span>
                <br />
                не найдено
            </h1>
            <p className={styles.description}>Товар не найден в базе данных</p>
        </div>
    );
};

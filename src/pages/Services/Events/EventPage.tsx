import React from 'react';
import {useSearchParams} from 'react-router-dom';

import {events} from './Events';
import {useIsMobileContext} from '../../../contexts/isMobileContext';

import Page404 from '../../Page404/Page404';
import TopBar from '../../../components/TopBar/TopBar';

import styles from './EventPage.module.css';


const getEventById = (id: string | null) => {
    if (id == null) {
        return id;
    }
    for (let i = 0; i < events.length; i++) {
        if (events[i].id == id) {
            return (events[i]);
        }
    }
    return null;
}

const EventPage = () => {
    const isMobile = useIsMobileContext();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const event = getEventById(id);

    if (event == null) {
        return <Page404/>;
    }

    return (
        <>
            {!isMobile ?
                <div className={styles.name__favorite}>
                    <h1 className={styles.name}>{event.name}</h1>
                </div>
                :
                <TopBar leftButton={'burger'}>
                    <h5>{event.name}</h5>
                </TopBar>
            }
            <div className={styles.photo__info}>
                <img className={styles.photo} src={event.photo} alt={'Фото мероприятия'}></img>
                <div className={styles.info}>
                    <div className={styles.description}>
                        <h3>Описание:</h3>
                        <p>{event.description}</p>
                    </div>
                    <div className={styles.place}>
                        <h3>Место:</h3>
                        <p>{event.place}</p>
                    </div>
                    <div className={styles.date}>
                        <h3>Дата:</h3>
                        <p>{event.date}</p>
                    </div>
                    <div className={styles.price}>
                        <h3>Цена:</h3>
                        <p>{event.price}</p>
                    </div>
                    <div className={styles.contacts}>
                        <h3>Контакты:</h3>
                        <p>{event.phone}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventPage;

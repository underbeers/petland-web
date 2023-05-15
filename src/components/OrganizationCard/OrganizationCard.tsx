import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

import Icons from '../UIKit/Icons';

import styles from './OrganizationCard.module.css';


interface iOrganizationProps {
    id: string,
    name: string,
    rating: number,
    type: string,
    schedule: string,
    city: number,
    address: string,
    phone: string,
    photo: string,
}

const OrganizationCard: React.FC<iOrganizationProps> = ({id, name, rating, type, schedule, city, address, phone, photo}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth <= 700)
    });

    return (
        <NavLink to={`/services/organizations/organization?id=${id}`} className={styles.card}>
            <img className={styles.photo}
                 src={photo}
                 alt={'Фото организации'}/>
            <div className={styles.orgInfo}>
                <div className={styles.name__like}>
                    <h5>{name}</h5>
                    {isLiked ?
                        <Icons icon={'cards-heart'} className={styles.heart} onClick={(event) => {
                            event.preventDefault();
                            setIsLiked(!isLiked);
                        }}/> : <Icons icon={'cards-heart-outline'} className={styles.heart}
                                      onClick={(event) => {
                                          event.preventDefault();
                                          setIsLiked(!isLiked);
                                      }}/>}
                </div>
                {!isMobile ?
                    <div className={styles.rating__stars}>
                        <Icons icon={'round-star'} className={styles.star}/>
                        <Icons icon={'round-star'} className={styles.star}/>
                        <Icons icon={'round-star'} className={styles.star}/>
                        <Icons icon={'round-star'} className={styles.star}/>
                        <Icons icon={'round-star'} className={styles.star}/>
                    </div> :
                    <div className={styles.star__number}>
                        <Icons icon={'round-star'} className={styles.star}/>
                        <p>{rating}</p>
                    </div>
                }

                {!isMobile ?
                    <div className={styles.additional__info}>
                        <div className={styles.info__row}><p
                            className={cn('secondary__text-1', styles.title)}>Тип: </p><p
                            className={cn('secondary__text-1', styles.data)}>{type}</p></div>
                        <div className={styles.info__row}><p
                            className={cn('secondary__text-1', styles.title)}>Адрес: </p><p
                            className={cn('secondary__text-1', styles.data)}>{address}</p></div>
                    </div> :
                    <p className={'secondary__text-2'}>Тип:<br/>{type}</p>
                }
            </div>
        </NavLink>
    )
}
export default OrganizationCard;
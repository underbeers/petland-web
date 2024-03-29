import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';
import cn from 'classnames';

import {useUserContext} from '../../../contexts/userContext';
import UserService from '../../../services/userService';
import {UserInfoType} from '../../AdCard/AdCard';

import styles from './Dialog.module.css';


export type DialogProps = {
    id: string;
    message: string;
    username: string;
    time: string;
    connected: boolean;
    hasNewMessage: boolean;
};

const Dialog: React.FC<DialogProps> = ({id, message, username, time, connected, hasNewMessage}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const chat = searchParams.get('chat') || null;
    const navigate = useNavigate();
    const {user, setUser} = useUserContext();

    const [userInfo, setUserInfo] = useState<UserInfoType>();

    const today = new Date();
    const prettyTime = new Date(time);

    useEffect(() => {
        UserService.getUserInfoByID(`?chatID=${id}`).then(response => {
            //console.log(response);
            switch (response.status) {
                case 200:
                    return response.json();
                default:
                    return null;
            }
        }).then(body => {
            //console.log(body);
            if (body) {
                setUserInfo(body);
            }
        });
    }, []);

    return (
        <div onClick={() => navigate(`/messenger?chat=${id}`)}
             className={cn(styles.card, chat == id ? styles.active : '')}>
            <div className={connected ? styles.photo__wrapper : ''}>
                <img className={styles.photo} src={id == user.chatID ? user.photo : userInfo?.imageLink}/>
            </div>
            <div className={styles.info}>
                <div className={styles.name__n__time}>
                    <h5 className={styles.name}>
                        {username}
                    </h5>
                    <p className={cn('secondary__text-2', styles.time)}>
                        {time ?
                            prettyTime.toJSON().substring(0, 10) == today.toJSON().substring(0, 10) ?
                                prettyTime.toTimeString().substring(0, 5)
                                :
                                prettyTime.toJSON().substring(0, 10).split('-').reverse().join('.')
                            :
                            ''
                        }
                    </p>
                </div>
                <div className={styles.name__n__time}>
                    <p className={cn('secondary__text-2', styles.last__message)}>
                        {message}
                    </p>
                    {hasNewMessage && <p className={styles.has__new__message}/>}
                </div>
            </div>
        </div>
    );
};

export default Dialog;

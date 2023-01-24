import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';


interface iButtonProps {
    onClick: Function,
    label: string,
    size: 'small' | 'medium',
    color: 'orange' | 'green',
    type: 'fill' | 'transparent',
    disabled?: boolean
}

const Button: React.FC<iButtonProps> = ({onClick, label, size, color, type, disabled}) => {
    return (
        <button disabled={disabled}
                className={cn(styles.button, styles[size], styles[color], styles[type])}
                onClick={event => {onClick()}}>
            {label}
        </button>
    );
};

export default Button;

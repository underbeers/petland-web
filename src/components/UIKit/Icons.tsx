import React, {MouseEventHandler} from 'react';


type Icon = 'account' | 'account-circle'  | 'ad' | 'bell' | 'calendar' | 'cards-heart' | 'cards-heart-outline' |
    'chat' | 'checkbox-blank-outline' | 'checkbox-marked' | 'chevron-down' | 'chevron-up' | 'cross' | 'eye' |
    'eye-slash' | 'filter' | 'grid-2-1' | 'grid-2-2' | 'paw' | 'radio-button-checked' | 'reviews' | 'round-star' |
    'round-star-border' | 'search-rounded' | 'settings' | 'sign-out' | 'sort-alt' | 'radio-button-unchecked' |
    'arrow-right' | 'arrow-left' | 'dots-horizontal' | 'dots-vertical' | 'share' | 'edit' | 'check' | 'burger' |
    'doctor' | 'calendar-multiple' | 'hospital' | 'bulletin-board' | 'plus-circle-outline' | 'template';

type IconsProps = {
    className?: string,
    onClick?: MouseEventHandler<SVGSVGElement>,
    icon: Icon
}

const path = (icon: Icon) => {
    switch (icon) {
        case 'account':
            return (<path d='M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z' fill='#4F4F4F'/>);
        case 'account-circle':
            return (<path d='M12 19.2C9.5 19.2 7.29 17.92 6 16C6.03 14 10 12.9 12 12.9C14 12.9 17.97 14 18 16C16.71 17.92 14.5 19.2 12 19.2ZM12 5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8C15 8.79565 14.6839 9.55871 14.1213 10.1213C13.5587 10.6839 12.7956 11 12 11C11.2044 11 10.4413 10.6839 9.87868 10.1213C9.31607 9.55871 9 8.79565 9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z' fill='#4F4F4F'/>);
        case 'ad':
            return (<><path d='M18 12C17.45 12 17 12.45 17 13V18.22C17 18.77 16.55 19.22 16 19.22H6C5.45 19.22 5 18.77 5 18.22V8C5 7.45 5.45 7 6 7H11C11.55 7 12 6.55 12 6C12 5.45 11.55 5 11 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21H17C18.1 21 19 20.1 19 19V13C19 12.45 18.55 12 18 12ZM21.02 5H19V2.98C19 2.44 18.56 2 18.02 2H17.99C17.44 2 17 2.44 17 2.98V5H14.99C14.45 5 14.01 5.44 14 5.98V6.01C14 6.56 14.44 7 14.99 7H17V9.01C17 9.55 17.44 10 17.99 9.99H18.02C18.56 9.99 19 9.55 19 9.01V7H21.02C21.56 7 22 6.56 22 6.02V5.98C22 5.44 21.56 5 21.02 5Z' fill='#4F4F4F'/><path d='M14 9H8C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9ZM14 12H8C7.45 12 7 12.45 7 13C7 13.55 7.45 14 8 14H14C14.55 14 15 13.55 15 13C15 12.45 14.55 12 14 12ZM14 15H8C7.45 15 7 15.45 7 16C7 16.55 7.45 17 8 17H14C14.55 17 15 16.55 15 16C15 15.45 14.55 15 14 15Z' fill='#4F4F4F'/></>);
        case 'bell':
            return (<path d='M21 19V20H3V19L5 17V11C5 7.9 7.03 5.17 10 4.29V4C10 3.46957 10.2107 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12 2C12.5304 2 13.0391 2.21071 13.4142 2.58579C13.7893 2.96086 14 3.46957 14 4V4.29C16.97 5.17 19 7.9 19 11V17L21 19ZM14 21C14 21.5304 13.7893 22.0391 13.4142 22.4142C13.0391 22.7893 12.5304 23 12 23C11.4696 23 10.9609 22.7893 10.5858 22.4142C10.2107 22.0391 10 21.5304 10 21' fill='#4F4F4F'/>);
        case 'calendar':
            return (<path d='M9 10V12H7V10H9ZM13 10V12H11V10H13ZM17 10V12H15V10H17ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H6V1H8V3H16V1H18V3H19ZM19 19V8H5V19H19ZM9 14V16H7V14H9ZM13 14V16H11V14H13ZM17 14V16H15V14H17Z' fill='#4F4F4F'/>);
        case 'cards-heart':
            return (<path d='M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z' fill='#4F4F4F'/>);
        case 'cards-heart-outline':
            return (<path d='M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z' fill='#4F4F4F'/>);
        case 'chat':
            return (<path d='M12 3C17.5 3 22 6.58 22 11C22 15.42 17.5 19 12 19C10.76 19 9.57 18.82 8.47 18.5C5.55 21 2 21 2 21C4.33 18.67 4.7 17.1 4.75 16.5C3.05 15.07 2 13.13 2 11C2 6.58 6.5 3 12 3Z' fill='#4F4F4F'/>);
        case 'checkbox-blank-outline':
            return (<path d='M19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3ZM19 5V19H5V5H19Z' fill='#4F4F4F'/>);
        case 'checkbox-marked':
            return (<path d='M10 17L5 12L6.41 10.58L10 14.17L17.59 6.58L19 8M19 3H5C3.89 3 3 3.89 3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3Z' fill='#4F4F4F'/>);
        case 'chevron-down':
            return (<path d='M6 9L12 15L18 9' stroke='#4F4F4F' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>);
        case 'chevron-up':
            return (<path d='M18 15L12 9L6 15' stroke='#4F4F4F' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>);
        case 'cross':
            return (<path fillRule='evenodd' clipRule='evenodd' d='M18.8512 6.45119C18.9367 6.36578 19.0046 6.26436 19.0509 6.15273C19.0972 6.04109 19.1211 5.92143 19.1212 5.80056C19.1213 5.6797 19.0975 5.56 19.0514 5.44831C19.0052 5.33661 18.9374 5.23511 18.852 5.14959C18.7666 5.06408 18.6652 4.99622 18.5536 4.9499C18.4419 4.90358 18.3223 4.8797 18.2014 4.87962C18.0805 4.87955 17.9608 4.90328 17.8491 4.94947C17.7374 4.99565 17.6359 5.06338 17.5504 5.14879L12 10.6992L6.45123 5.14879C6.27852 4.97609 6.04427 4.87906 5.80003 4.87906C5.55578 4.87906 5.32153 4.97609 5.14883 5.14879C4.97612 5.3215 4.87909 5.55575 4.87909 5.79999C4.87909 6.04424 4.97612 6.27849 5.14883 6.45119L10.6992 12L5.14883 17.5488C5.06331 17.6343 4.99547 17.7358 4.94919 17.8476C4.90291 17.9593 4.87909 18.0791 4.87909 18.2C4.87909 18.3209 4.90291 18.4407 4.94919 18.5524C4.99547 18.6642 5.06331 18.7657 5.14883 18.8512C5.32153 19.0239 5.55578 19.1209 5.80003 19.1209C5.92096 19.1209 6.04072 19.0971 6.15245 19.0508C6.26419 19.0045 6.36571 18.9367 6.45123 18.8512L12 13.3008L17.5504 18.8512C17.7231 19.0237 17.9573 19.1205 18.2014 19.1204C18.4455 19.1202 18.6795 19.0231 18.852 18.8504C19.0245 18.6777 19.1213 18.4435 19.1212 18.1994C19.121 17.9553 19.0239 17.7213 18.8512 17.5488L13.3008 12L18.8512 6.45119Z' fill='#4F4F4F'/>);
        case 'eye':
            return (<path d='M23.1844 11.7C23.1562 11.625 22.3594 9.8625 20.5969 8.09063C18.2437 5.74688 15.2719 4.5 12 4.5C8.72812 4.5 5.75624 5.74688 3.40312 8.09063C1.64062 9.8625 0.843741 11.625 0.815616 11.7C0.77376 11.7945 0.752136 11.8967 0.752136 12C0.752136 12.1033 0.77376 12.2055 0.815616 12.3C0.843741 12.375 1.64062 14.1375 3.40312 15.9094C5.75624 18.2531 8.72812 19.5 12 19.5C15.2719 19.5 18.2437 18.2531 20.5969 15.9094C22.3594 14.1375 23.1562 12.375 23.1844 12.3C23.2262 12.2055 23.2478 12.1033 23.2478 12C23.2478 11.8967 23.2262 11.7945 23.1844 11.7ZM12 18C9.11249 18 6.59062 16.95 4.50937 14.8781C3.64924 14.031 2.91943 13.0611 2.34374 12C2.91865 10.9356 3.64849 9.96245 4.50937 9.1125C6.59062 7.05 9.11249 6 12 6C14.8875 6 17.4094 7.05 19.4906 9.1125C20.3515 9.96245 21.0813 10.9356 21.6562 12C20.9812 13.2656 18.0375 18 12 18ZM12 7.5C11.11 7.5 10.2399 7.76392 9.49993 8.25839C8.7599 8.75285 8.18313 9.45566 7.84253 10.2779C7.50194 11.1002 7.41282 12.005 7.58646 12.8779C7.76009 13.7508 8.18867 14.5526 8.81801 15.182C9.44735 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5ZM12 15C11.4066 15 10.8266 14.8241 10.3333 14.4944C9.83993 14.1648 9.45542 13.6962 9.22835 13.1481C9.00129 12.5999 8.94188 11.9967 9.05764 11.4147C9.17339 10.8328 9.45911 10.2982 9.87867 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.824 10.8266 15 11.4067 15 12C14.9975 12.7949 14.6807 13.5565 14.1186 14.1186C13.5565 14.6807 12.7949 14.9975 12 15Z' fill='#4F4F4F'/>);
        case 'eye-slash':
            return (<path d='M5.05311 3.24373C4.91761 3.10198 4.73198 3.01893 4.53599 3.01238C4.34 3.00583 4.14924 3.07631 4.00458 3.20871C3.85993 3.34111 3.77288 3.5249 3.76209 3.7207C3.7513 3.9165 3.81763 4.10874 3.94686 4.25624L5.74686 6.23436C2.34374 8.32498 0.881238 11.55 0.815613 11.7C0.77408 11.7962 0.752655 11.8999 0.752655 12.0047C0.752655 12.1095 0.77408 12.2132 0.815613 12.3094C0.843738 12.375 1.64061 14.1375 3.40311 15.9094C5.75624 18.2531 8.72811 19.5 12 19.5C13.6809 19.5067 15.3446 19.1618 16.8844 18.4875L18.9469 20.7562C19.0171 20.833 19.1026 20.8943 19.1978 20.9363C19.293 20.9783 19.3959 21 19.5 21C19.6871 20.9981 19.8671 20.9282 20.0062 20.8031C20.08 20.7373 20.1398 20.6574 20.1821 20.5681C20.2245 20.4789 20.2486 20.382 20.253 20.2833C20.2573 20.1846 20.2419 20.086 20.2076 19.9933C20.1733 19.9007 20.1207 19.8158 20.0531 19.7437L5.05311 3.24373ZM9.48749 10.3594L13.3969 14.6531C12.9668 14.8818 12.487 15.0009 12 15C11.4593 15.0001 10.9286 14.8542 10.4641 14.5775C9.99954 14.3009 9.6184 13.9038 9.36098 13.4283C9.10355 12.9528 8.97941 12.4166 9.00168 11.8764C9.02395 11.3362 9.1918 10.812 9.48749 10.3594ZM12 18C9.11249 18 6.59061 16.95 4.50936 14.8781C3.64712 14.0329 2.91706 13.0626 2.34374 12C2.78436 11.175 4.19999 8.85936 6.77811 7.36873L8.46561 9.22499C7.81515 10.0615 7.48076 11.1007 7.52134 12.1596C7.56192 13.2185 7.97487 14.2291 8.68744 15.0134C9.40002 15.7976 10.3665 16.3053 11.4167 16.4469C12.4668 16.5885 13.5332 16.355 14.4281 15.7875L15.8062 17.3062C14.5914 17.771 13.3007 18.0063 12 18ZM23.1844 12.3094C23.1469 12.3937 22.2 14.4937 20.0531 16.4156C19.9155 16.5359 19.739 16.6025 19.5562 16.6031C19.4511 16.6044 19.3469 16.5823 19.2513 16.5385C19.1557 16.4948 19.0709 16.4304 19.0031 16.35C18.9372 16.2767 18.8864 16.1912 18.8536 16.0983C18.8208 16.0055 18.8066 15.907 18.8118 15.8086C18.817 15.7103 18.8416 15.6139 18.884 15.525C18.9265 15.4361 18.9861 15.3565 19.0594 15.2906C20.1072 14.3507 20.9856 13.2376 21.6562 12C21.0813 10.9356 20.3515 9.96244 19.4906 9.11248C17.4094 7.04998 14.8875 5.99998 12 5.99998C11.3906 5.99753 10.782 6.04772 10.1812 6.14998C9.98514 6.17994 9.78511 6.13197 9.62392 6.01634C9.46274 5.90071 9.3532 5.72659 9.31874 5.53123C9.30265 5.43397 9.3059 5.33448 9.32831 5.23847C9.35071 5.14246 9.39182 5.0518 9.44929 4.9717C9.50676 4.89159 9.57945 4.8236 9.66323 4.77161C9.747 4.71963 9.84019 4.68467 9.93749 4.66874C10.6191 4.55517 11.309 4.49873 12 4.49998C15.2719 4.49998 18.2437 5.74686 20.5969 8.09061C22.3594 9.86248 23.1562 11.625 23.1844 11.7C23.2259 11.7962 23.2473 11.8999 23.2473 12.0047C23.2473 12.1095 23.2259 12.2132 23.1844 12.3094ZM12.5625 9.05624C12.4652 9.03777 12.3726 9.00032 12.2898 8.94604C12.207 8.89176 12.1357 8.82171 12.08 8.73987C11.9675 8.57461 11.9252 8.37141 11.9625 8.17498C11.9998 7.97856 12.1136 7.80499 12.2788 7.69247C12.4441 7.57995 12.6473 7.53769 12.8437 7.57499C13.8001 7.76202 14.6706 8.25257 15.3259 8.97375C15.9812 9.69494 16.3864 10.6083 16.4812 11.5781C16.4995 11.7757 16.4387 11.9725 16.3122 12.1254C16.1857 12.2782 16.0038 12.3747 15.8062 12.3937H15.7312C15.5457 12.3945 15.3666 12.3255 15.2294 12.2005C15.0923 12.0755 15.0071 11.9036 14.9906 11.7187C14.9259 11.0729 14.6548 10.4651 14.2174 9.98546C13.78 9.50585 13.1997 9.18 12.5625 9.05624Z' fill='#4F4F4F'/>);
        case 'filter':
            return (<path d='M14 12V19.88C14.04 20.18 13.94 20.5 13.71 20.71C13.6175 20.8027 13.5076 20.8762 13.3866 20.9264C13.2657 20.9766 13.136 21.0024 13.005 21.0024C12.874 21.0024 12.7444 20.9766 12.6234 20.9264C12.5024 20.8762 12.3925 20.8027 12.3 20.71L10.29 18.7C10.1809 18.5934 10.098 18.463 10.0477 18.319C9.9974 18.175 9.98107 18.0213 10 17.87V12H9.97001L4.21001 4.62C4.04762 4.41153 3.97434 4.14726 4.0062 3.88493C4.03805 3.6226 4.17244 3.38355 4.38001 3.22C4.57001 3.08 4.78001 3 5.00001 3H19C19.22 3 19.43 3.08 19.62 3.22C19.8276 3.38355 19.962 3.6226 19.9938 3.88493C20.0257 4.14726 19.9524 4.41153 19.79 4.62L14.03 12H14Z' fill='#4F4F4F'/>);
        case 'grid-2-1':
            return (<><path d='M19 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z' fill='#4F4F4F'/><path d='M19 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z' fill='#4F4F4F'/></>);
        case 'grid-2-2':
            return (<><path d='M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z' fill='#4F4F4F'/><path d='M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z' fill='#4F4F4F'/><path d='M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z' fill='#4F4F4F'/><path d='M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z' fill='#4F4F4F'/></>);
        case 'paw':
            return (<path d='M8.35003 3C9.53003 2.83 10.78 4.12 11.14 5.9C11.5 7.67 10.85 9.25 9.67003 9.43C8.50003 9.61 7.24003 8.32 6.87003 6.54C6.50003 4.77 7.17003 3.19 8.35003 3ZM15.5 3C16.69 3.19 17.35 4.77 17 6.54C16.62 8.32 15.37 9.61 14.19 9.43C13 9.25 12.35 7.67 12.72 5.9C13.08 4.12 14.33 2.83 15.5 3ZM3.00003 7.6C4.14003 7.11 5.69003 8 6.50003 9.55C7.26003 11.13 7.00003 12.79 5.87003 13.28C4.74003 13.77 3.20003 12.89 2.41003 11.32C1.62003 9.75 1.90003 8.08 3.00003 7.6ZM21 7.6C22.1 8.08 22.38 9.75 21.59 11.32C20.8 12.89 19.26 13.77 18.13 13.28C17 12.79 16.74 11.13 17.5 9.55C18.31 8 19.86 7.11 21 7.6ZM19.33 18.38C19.37 19.32 18.65 20.36 17.79 20.75C16 21.57 13.88 19.87 11.89 19.87C9.90003 19.87 7.76003 21.64 6.00003 20.75C5.00003 20.26 4.31003 18.96 4.44003 17.88C4.62003 16.39 6.41003 15.59 7.47003 14.5C8.88003 13.09 9.88003 10.44 11.89 10.44C13.89 10.44 14.95 13.05 16.3 14.5C17.41 15.72 19.26 16.75 19.33 18.38Z' fill='#4F4F4F'/>);
        case 'radio-button-checked':
            return (<path d='M12 17C13.3833 17 14.5627 16.5123 15.538 15.537C16.5133 14.5617 17.0007 13.3827 17 12C17 10.6167 16.5123 9.43733 15.537 8.462C14.5617 7.48667 13.3827 6.99933 12 7C10.6167 7 9.43733 7.48767 8.462 8.463C7.48667 9.43833 6.99933 10.6173 7 12C7 13.3833 7.48767 14.5627 8.463 15.538C9.43833 16.5133 10.6173 17.0007 12 17ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88333 20.6867 5.825 19.9743 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26333 14.6833 2.00067 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31333 6.88333 4.02567 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26333 10.6167 2.00067 12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31333 18.175 4.02567 19.075 4.925C19.975 5.825 20.6877 6.88333 21.213 8.1C21.7383 9.31667 22.0007 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6867 17.1167 19.9743 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7383 13.3833 22.0007 12 22Z' fill='#4F4F4F'/>);
        case 'radio-button-unchecked':
            return (<path d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z' fill='#4F4F4F'/>);
        case 'reviews':
            return (<path d='M11.595 14.9415C11.67 15.1243 11.805 15.2156 12 15.2156C12.195 15.2156 12.33 15.1243 12.405 14.9415L13.395 12.7258L15.5775 11.7207C15.7575 11.6446 15.8475 11.5075 15.8475 11.3096C15.8475 11.1116 15.7575 10.9746 15.5775 10.8984L13.395 9.89335L12.405 7.67763C12.33 7.49489 12.195 7.40352 12 7.40352C11.805 7.40352 11.67 7.49489 11.595 7.67763L10.605 9.89335L8.4225 10.8984C8.2425 10.9746 8.1525 11.1116 8.1525 11.3096C8.1525 11.5075 8.2425 11.6446 8.4225 11.7207L10.605 12.7258L11.595 14.9415ZM3 20.0582V5.82739C3 5.32486 3.1764 4.89451 3.5292 4.53634C3.8814 4.17878 4.305 4 4.8 4H19.2C19.695 4 20.1189 4.17878 20.4717 4.53634C20.8239 4.89451 21 5.32486 21 5.82739V16.7918C21 17.2943 20.8239 17.7246 20.4717 18.0828C20.1189 18.4404 19.695 18.6192 19.2 18.6192H6.6L4.53 20.7207C4.245 21.01 3.9186 21.0746 3.5508 20.9144C3.1836 20.7548 3 20.4694 3 20.0582Z' fill='#4F4F4F'/>);
        case 'round-star':
            return (<path d='M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12001 19.64 9.05001L14.81 8.64001L12.92 4.18001C12.58 3.37001 11.42 3.37001 11.08 4.18001L9.19001 8.63001L4.36001 9.04001C3.48001 9.11001 3.12001 10.21 3.79001 10.79L7.46001 13.97L6.36001 18.69C6.16001 19.55 7.09001 20.23 7.85001 19.77L12 17.27Z' fill='#4F4F4F'/>);
        case 'round-star-border':
            return (<path d='M19.65 9.04L14.81 8.62L12.92 4.17C12.58 3.36 11.42 3.36 11.08 4.17L9.19001 8.63L4.36001 9.04C3.48001 9.11 3.12001 10.21 3.79001 10.79L7.46001 13.97L6.36001 18.69C6.16001 19.55 7.09001 20.23 7.85001 19.77L12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.97L20.21 10.79C20.88 10.21 20.53 9.11 19.65 9.04ZM12 15.4L8.24001 17.67L9.24001 13.39L5.92001 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z' fill='#4F4F4F'/>);
        case 'search-rounded':
            return (<path d='M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z' fill='#4F4F4F'/>);
        case 'settings':
            return (<path d='M11 17H13L13.3 15.5C13.5 15.4167 13.6877 15.3293 13.863 15.238C14.0377 15.146 14.2167 15.0333 14.4 14.9L15.85 15.35L16.85 13.65L15.7 12.65C15.7333 12.4167 15.75 12.2 15.75 12C15.75 11.8 15.7333 11.5833 15.7 11.35L16.85 10.35L15.85 8.65L14.4 9.1C14.2167 8.96667 14.0377 8.854 13.863 8.762C13.6877 8.67067 13.5 8.58333 13.3 8.5L13 7H11L10.7 8.5C10.5 8.58333 10.3123 8.67067 10.137 8.762C9.96233 8.854 9.78333 8.96667 9.6 9.1L8.15 8.65L7.15 10.35L8.3 11.35C8.26667 11.5833 8.25 11.8 8.25 12C8.25 12.2 8.26667 12.4167 8.3 12.65L7.15 13.65L8.15 15.35L9.6 14.9C9.78333 15.0333 9.96233 15.146 10.137 15.238C10.3123 15.3293 10.5 15.4167 10.7 15.5L11 17ZM12 14C11.45 14 10.9793 13.804 10.588 13.412C10.196 13.0207 10 12.55 10 12C10 11.45 10.196 10.979 10.588 10.587C10.9793 10.1957 11.45 10 12 10C12.55 10 13.021 10.1957 13.413 10.587C13.8043 10.979 14 11.45 14 12C14 12.55 13.8043 13.0207 13.413 13.412C13.021 13.804 12.55 14 12 14ZM5 21C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H5Z' fill='#4F4F4F'/>);
        case 'sign-out':
            return (<path d='M21.0469 12.7969L17.1094 16.7344C17.0046 16.8388 16.8803 16.9215 16.7436 16.9778C16.6069 17.0341 16.4604 17.0629 16.3125 17.0625C16.0143 17.0612 15.7283 16.9435 15.5156 16.7344C15.4107 16.6299 15.3275 16.5057 15.2707 16.3689C15.214 16.2322 15.1847 16.0856 15.1847 15.9375C15.1847 15.7894 15.214 15.6428 15.2707 15.5061C15.3275 15.3693 15.4107 15.2451 15.5156 15.1406L17.5312 13.125H9.75C9.45163 13.125 9.16548 13.0065 8.9545 12.7955C8.74353 12.5845 8.625 12.2984 8.625 12C8.625 11.7016 8.74353 11.4155 8.9545 11.2045C9.16548 10.9935 9.45163 10.875 9.75 10.875H17.5312L15.5156 8.85938C15.3043 8.64803 15.1855 8.36139 15.1855 8.0625C15.1855 7.76361 15.3043 7.47697 15.5156 7.26562C15.727 7.05428 16.0136 6.93555 16.3125 6.93555C16.6114 6.93555 16.898 7.05428 17.1094 7.26562L21.0469 11.2031C21.1518 11.3076 21.235 11.4318 21.2918 11.5686C21.3485 11.7053 21.3778 11.8519 21.3778 12C21.3778 12.1481 21.3485 12.2947 21.2918 12.4314C21.235 12.5682 21.1518 12.6924 21.0469 12.7969ZM9.75 19.125H4.875V4.875H9.75C10.0484 4.875 10.3345 4.75647 10.5455 4.5455C10.7565 4.33452 10.875 4.04837 10.875 3.75C10.875 3.45163 10.7565 3.16548 10.5455 2.9545C10.3345 2.74353 10.0484 2.625 9.75 2.625H4.5C4.00348 2.62746 3.528 2.8258 3.1769 3.1769C2.8258 3.528 2.62746 4.00348 2.625 4.5V19.5C2.62746 19.9965 2.8258 20.472 3.1769 20.8231C3.528 21.1742 4.00348 21.3725 4.5 21.375H9.75C10.0484 21.375 10.3345 21.2565 10.5455 21.0455C10.7565 20.8345 10.875 20.5484 10.875 20.25C10.875 19.9516 10.7565 19.6655 10.5455 19.4545C10.3345 19.2435 10.0484 19.125 9.75 19.125Z' fill='#4F4F4F'/>);
        case 'sort-alt':
            return (<path d='M6.22701 11H17.774C18.636 11 19.094 9.98 18.521 9.335L12.748 2.84C12.6544 2.73431 12.5394 2.64969 12.4106 2.59173C12.2818 2.53378 12.1422 2.50381 12.001 2.50381C11.8598 2.50381 11.7202 2.53378 11.5914 2.59173C11.4627 2.64969 11.3476 2.73431 11.254 2.84L5.47901 9.335C4.90601 9.98 5.36401 11 6.22701 11ZM11.253 21.159C11.3466 21.2647 11.4617 21.3493 11.5904 21.4073C11.7192 21.4652 11.8588 21.4952 12 21.4952C12.1412 21.4952 12.2808 21.4652 12.4096 21.4073C12.5384 21.3493 12.6534 21.2647 12.747 21.159L18.52 14.664C19.094 14.02 18.636 13 17.773 13H6.22701C5.36501 13 4.90701 14.02 5.48001 14.665L11.253 21.159Z' fill='#4F4F4F'/>);
        case 'arrow-right':
            return (<path d='M5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13L5 11ZM19.7071 12.7071C20.0976 12.3166 20.0976 11.6834 19.7071 11.2929L13.3431 4.92893C12.9526 4.53841 12.3195 4.53841 11.9289 4.92893C11.5384 5.31946 11.5384 5.95262 11.9289 6.34315L17.5858 12L11.9289 17.6569C11.5384 18.0474 11.5384 18.6805 11.9289 19.0711C12.3195 19.4616 12.9526 19.4616 13.3431 19.0711L19.7071 12.7071ZM5 13L19 13L19 11L5 11L5 13Z' fill='#4F4F4F'/>);
        case 'arrow-left':
            return (<path d='M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L19 13ZM4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L10.6569 19.0711C11.0474 19.4616 11.6805 19.4616 12.0711 19.0711C12.4616 18.6805 12.4616 18.0474 12.0711 17.6569L6.41421 12L12.0711 6.34315C12.4616 5.95262 12.4616 5.31946 12.0711 4.92893C11.6805 4.53841 11.0474 4.53841 10.6569 4.92893L4.29289 11.2929ZM19 11L5 11L5 13L19 13L19 11Z' fill='#4F4F4F'/>);
        case 'dots-horizontal':
            return (<path d='M16 12C16 11.4696 16.2107 10.9609 16.5858 10.5858C16.9609 10.2107 17.4696 10 18 10C18.5304 10 19.0391 10.2107 19.4142 10.5858C19.7893 10.9609 20 11.4696 20 12C20 12.5304 19.7893 13.0391 19.4142 13.4142C19.0391 13.7893 18.5304 14 18 14C17.4696 14 16.9609 13.7893 16.5858 13.4142C16.2107 13.0391 16 12.5304 16 12ZM10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12ZM4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12Z' fill='#4F4F4F'/>);
        case 'dots-vertical':
            return (<path d='M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4Z' fill='#4F4F4F'/>);
        case 'share':
            return (<path d='M12 1L8 5H11V14H13V5H16M18 23H6C4.89 23 4 22.1 4 21V9C4 8.46957 4.21071 7.96086 4.58579 7.58579C4.96086 7.21071 5.46957 7 6 7H9V9H6V21H18V9H15V7H18C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V21C20 21.5304 19.7893 22.0391 19.4142 22.4142C19.0391 22.7893 18.5304 23 18 23Z' fill='#4F4F4F'/>);
        case 'edit':
            return (<path d='M20.71 7.04C21.1 6.65 21.1 6 20.71 5.63L18.37 3.29C18 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87M3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25Z' fill='#4F4F4F'/>);
        case 'check':
            return (<path d='M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z' fill='#4F4F4F'/>);
        case 'burger':
            return (<path d='M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 17C3 16.4477 3.44772 16 4 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H4C3.44772 18 3 17.5523 3 17Z' fill='#4F4F4F'/>);
        case 'doctor':
            return (<path d="M14.84 16.26C17.86 16.83 20 18.29 20 20V22H4V20C4 18.29 6.14 16.83 9.16 16.26L12 21L14.84 16.26ZM8 8H16V10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10V8ZM8 7L8.41 2.9C8.46 2.39 8.89 2 9.41 2H14.6C15.11 2 15.54 2.39 15.59 2.9L16 7H8ZM12 3H11V4H10V5H11V6H12V5H13V4H12V3Z" fill="#4F4F4F"/>);
        case 'calendar-multiple':
            return (<path d="M21 17V8H7V17H21ZM21 3C21.5304 3 22.0391 3.21071 22.4142 3.58579C22.7893 3.96086 23 4.46957 23 5V17C23 17.5304 22.7893 18.0391 22.4142 18.4142C22.0391 18.7893 21.5304 19 21 19H7C5.89 19 5 18.1 5 17V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H8V1H10V3H18V1H20V3H21ZM3 21H17V23H3C1.89 23 1 22.1 1 21V9H3V21ZM19 15H15V11H19V15Z" fill="#4F4F4F"/>);
        case 'hospital':
            return (<path d="M2 22V7C2 6.73478 2.10536 6.48043 2.29289 6.29289C2.48043 6.10536 2.73478 6 3 6H7V2H17V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7V22H14V17H10V22H2ZM9 4V10H11V8H13V10H15V4H13V6H11V4H9ZM4 20H8V17H4V20ZM4 15H8V12H4V15ZM16 20H20V17H16V20ZM16 15H20V12H16V15ZM10 15H14V12H10V15Z" fill="#4F4F4F"/>);
        case "bulletin-board":
            return (<path d="M12.04 2.5L9.53 5H14.53L12.04 2.5ZM4 7V20H20V7H4ZM12 0L17 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V7C2 6.46957 2.21071 5.96086 2.58579 5.58579C2.96086 5.21071 3.46957 5 4 5H7L12 0ZM7 18V14H12V18H7ZM14 17V10H18V17H14ZM6 12V9H11V12H6Z" fill="#4F4F4F"/>);
        case "plus-circle-outline":
            return (<path d="M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM13 7H11V11H7V13H11V17H13V13H17V11H13V7Z" fill="#4F4F4F"/>);
        case 'template':
            return (<path d='M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z' fill='#4F4F4F'/>);
    }
};

const Icons: React.FC<IconsProps> = ({className, onClick, icon}) => {
    return (
        <svg onClick={onClick} className={className} width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            {path(icon)}
        </svg>
    );
};

export default Icons;

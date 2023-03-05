import {initialUserContextState, iUser} from '../userContext';


const API_URL = 'http://79.137.198.139:6002/api/v1';

class AuthService {
    private async authenticate(email: string, password: string) {
        return fetch(API_URL + '/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                login: email,
                password
            })
        });
    }

    private async authorize() {
        return fetch(API_URL + '/user/info/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
    }

    private async register(firstName: string, surName: string, email: string, password: string) {
        return fetch(API_URL + '/registration/new/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName,
                surName,
                email,
                password
            })
        });
    }

    public syncUser(
        user: iUser,
        setUser: (user: iUser) => void,
        dontLogOut: boolean,
        setResponseCode?: (code: number) => void,
        onFinish?: () => void) {
        if (!user.empty) {
            return;
        }
        setUser({...user, loading: true});
        this.authorize().then(response => {
            //console.log(response.status);
            setResponseCode && setResponseCode(response.status);
            if (response.ok) {
                //console.log('Authorized');
                return response.json();
            } else {
                switch (response.status) {
                    case 401:
                        alert('Вы были у нас слишком давно, авторизуйтесь заново');
                        break;
                    default:
                        alert(`Неизвестная ошибка, код ${response.status}`);
                        break;
                }
                return null;
            }
        }).then((body: { email: string, firstName: string, surName: string }) => {
            //console.log(body);
            body && setUser({
                ...body,
                photo: 'https://script.viserlab.com/stoclab/assets/user/profile/5fb0bd27eccb31605418279.jpg',
                empty: false,
                loading: false
            });
            body && onFinish && onFinish();
            if (!dontLogOut) {
                localStorage.removeItem('accessToken');
            }
        });
    }

    public signOut(setUser: (user: iUser) => void) {
        localStorage.removeItem('accessToken');
        setUser(initialUserContextState.user);
    }

    public async signIn(
        email: string,
        password: string,
        dontLogOut: boolean,
        setResponseCode: (code: number) => void,
        user: iUser,
        setUser: (user: iUser) => void,
        onFinish?: () => void) {
        setUser({...user, loading: true});
        this.authenticate(email, password).then(response => {
            //console.log(response.status);
            setResponseCode(response.status);
            if (response.ok) {
                //console.log('Authenticated');
                return response.json();
            } else {
                switch (response.status) {
                    case 500:
                        alert('Возникла техническая ошибка');
                        break;
                    case 400:
                        //alert('Неверный логин или пароль');
                        break;
                    default:
                        alert(`Произошла неизвестная ошибка, код ${response.status}`);
                        break;
                }
                return null;
            }
        }).then(body => {
            //console.log(body);
            body && localStorage.setItem('accessToken', body.accessToken);
            return body;
        }).then((body) => {
            body && this.syncUser(user, setUser, dontLogOut, setResponseCode, onFinish);
        });
    }

    public async signUp(
        firstName: string,
        surName: string,
        email: string,
        password: string,
        setResponseCode: (code: number) => void,
        onFinish?: () => void) {
        this.register(firstName, surName, email, password).then((response) => {
            //console.log(body);
            setResponseCode(response.status);
            if (response.ok) {
                onFinish && onFinish();
            } else {
                switch (response.status) {
                    case 500:
                        alert('Ошибка 500');
                        break;
                    case 400:
                        alert('Неверные данные');
                        break;
                    case 409:
                        break;
                    default:
                        alert('Неизвестная ошибка');
                        break;
                }
            }
            return response.json();
        }).then((body) => {
            //console.log(body);
        });
    }

    public async sendCode(email: string, code: string) {
        fetch(API_URL + '/email/code/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                code
            })}).then((response) => {
            //console.log(body);
            if (response.ok) {

            } else {
                switch (response.status) {
                    case 500:
                        alert('Несуществующий email');
                        break;
                    case 400:
                        alert('Неверные данные в запросе');
                        break;
                    default:
                        alert('Неизвестная ошибка');
                        break;
                }
            }
            return response.json();
        }).then((body) => {
            //console.log(body);
        });
    }
}

export default new AuthService();

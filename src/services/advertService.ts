import {API_URL} from './userService';


class AdvertService {
    public async getCities() {
        return fetch(API_URL + '/location/city', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
    }

    public async getDistricts() {
        return fetch(API_URL + '/location/district', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
    }

    public async getAdverts() {
        return fetch(API_URL + '/adverts', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        });
    }

    public async createAdvert(params: { petCardID: number, price: number, description: string, cityID: number,
        districtID: number, chat: boolean, phone?: string }, accessToken: string) {
        return fetch(API_URL + '/adverts/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(params)
        });
    }

    public async getFullAdvert(id: string) {
        return fetch(API_URL + `/adverts/full?id=${id}`);
    }
}

export default new AdvertService();
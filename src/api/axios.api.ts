import axios from 'axios';
import { getTokenFromLocalStorage } from '../helpers/localstorage.helper.ts';

export const instance = axios.create({
	baseURL: 'http://localhost:3001/api',
	headers: {
		//TODO перевірити текст повідомлення
		Authorization: `Bearer ` + getTokenFromLocalStorage() || '',
	},
});

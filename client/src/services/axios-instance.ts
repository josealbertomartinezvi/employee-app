import axios from 'axios';
import configKeys from '../utils/config';

const instance = axios.create({
    baseURL: configKeys.PRUEBA_API,
});

export default instance;
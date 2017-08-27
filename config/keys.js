import DEV_KEYS from './dev';
import PROD_KEYS from './prod';

const KEYS = (process.env.NODE_ENV === 'production') ? PROD_KEYS : DEV_KEYS;

export default KEYS;

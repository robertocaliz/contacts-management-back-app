import dayjs from 'dayjs';
import { RefreshToken } from '../../database/models';



export const getExpirationTime = () => {
	return dayjs().add(15, 'second').unix();
};



export const expired = (refreshToken: RefreshToken) => {
	return dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));
};
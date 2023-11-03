import dayjs from 'dayjs';



export const getExpirationTime = () => {
	return dayjs().add(2, 'days').unix();
};


export const expired = (expiresIn: number) => {
	return dayjs().isAfter(dayjs.unix(expiresIn));
};
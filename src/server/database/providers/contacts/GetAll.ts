import { Types } from 'mongoose';
import { DatabaseError } from '../../../utils/errors';
import userModel from '../../models/User';
import { QueryProps } from '../../../types';
import { Contact } from '../../models';

type GetAllResponse = {
    count: number;
    contacts: Contact[];
};

export const getAll = async (loggedUserId: string, queryProps: QueryProps) => {
    const {
        page = 1,
        per_page = 5,
        filter = '',
        criteria = 'name',
    } = queryProps;
    const start = (page - 1) * Number(per_page);
    try {
        const [data] = await userModel.aggregate<GetAllResponse>([
            {
                $match: {
                    _id: new Types.ObjectId(loggedUserId),
                },
            },
            {
                $project: {
                    _id: 0,
                    contacts: {
                        $filter: {
                            input: '$contacts',
                            as: 'contact',
                            cond: {
                                $regexMatch: {
                                    input: `$$contact.${criteria}`,
                                    regex: new RegExp(`${filter}`),
                                    options: 'i',
                                },
                            },
                        },
                    },
                },
            },
            {
                $addFields: {
                    count: {
                        $size: '$contacts',
                    },
                },
            },
            {
                $project: {
                    count: 1,
                    contacts: {
                        $slice: ['$contacts', start, Number(per_page)],
                    },
                },
            },
        ]);
        return data;
    } catch (error) {
        throw new DatabaseError('Error loading contacts.', error as Error);
    }
};

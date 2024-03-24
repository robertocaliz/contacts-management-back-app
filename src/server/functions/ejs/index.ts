import ejs from 'ejs';

type ReadFileParams = {
    file: string;
    data: ejs.Data;
};

export const renderFile = async ({ file, data }: ReadFileParams) => {
    return await ejs.renderFile(file, data);
};

import mongoDB from 'mongodb';
import { OptionalId } from 'mongodb';
import { Document } from 'mongodb';

const generateRandomEntityFromCollection = async (repository: mongoDB.Collection, numberOfEntities: number = 1) => {
    const randomEntities = await repository.aggregate([{ $sample: { size: numberOfEntities } }]).toArray();

    return randomEntities;
};
export default generateRandomEntityFromCollection;

export const getIdsOfDocuments = <T extends OptionalId<Document>[]>(documents: T) => {
    return documents.map((document) => document._id);
};

import { connectToDatabase, closeConnectionToDatabase } from '../services/Database.service';
import { COLLECTIONS, initializeCollections } from '../types/CollectionDocumentMapping';

const sumOfInwentarz = [
    {
        $unwind: '$pracownicy',
    },
    {
        $lookup: {
            from: 'pracownicyAdministracji',
            localField: 'pracownicy',
            foreignField: '_id',
            as: 'owner',
        },
    },
];

// type collectionQueryMethod =

const executeAggregationQuery = async (collection: DatabaseCollections) => {};

const mainQuery = async () => {
    const db = await connectToDatabase();
    initializeCollections(db);
    const result = COLLECTIONS.inwentarz.aggregate(sumOfInwentarz);
    for await (const doc of result) {
        console.log(doc);
    }

    closeConnectionToDatabase();
};
mainQuery();

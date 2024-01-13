import { connectToDatabase, closeConnectionToDatabase } from './services/Database.service';
import { COLLECTIONS, generateDocumentsFromMapping, initializeCollections } from './types/CollectionDocumentMapping';
import { asyncMeaseureTimeDecorator } from './utils/PerformanceTests';

const main = async () => {
    const db = await connectToDatabase();
    await generateDocumentsFromMapping(db);
    await closeConnectionToDatabase();
};

const measuredMain = asyncMeaseureTimeDecorator(main);
// measuredMain();

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

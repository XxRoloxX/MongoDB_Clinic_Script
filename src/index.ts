import { connectToDatabase, closeConnectionToDatabase } from './services/Database.service';
import { COLLECTIONS, generateDocumentsFromMapping, initializeCollections } from './types/CollectionDocumentMapping';
import { asyncMeaseureTimeDecorator } from './utils/PerformanceTests';
import { mainQuery } from './utils/queries';
const main = async () => {
    const db = await connectToDatabase();
    await generateDocumentsFromMapping(db);
    await closeConnectionToDatabase();
};

const measuredMain = asyncMeaseureTimeDecorator(main);
// measuredMain();
//
mainQuery();

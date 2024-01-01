import { connectToDatabase, closeConnectionToDatabase } from './services/Database.service';
import { generateDocumentsFromMapping } from './types/CollectionDocumentMapping';
import { asyncMeaseureTimeDecorator } from './utils/PerformanceTests';

const main = async () => {
    const db = await connectToDatabase();
    // initializeCollections(db);
    await generateDocumentsFromMapping(db);
    await closeConnectionToDatabase();
};
const measuredMain = asyncMeaseureTimeDecorator(main);
measuredMain();

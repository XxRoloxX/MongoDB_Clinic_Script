import { connectToDatabase, closeConnectionToDatabase } from '../services/Database.service';
import { Document, Collection, AggregationCursor } from 'mongodb';
import { COLLECTIONS, initializeCollections, DatabaseCollections } from '../types/CollectionDocumentMapping';
import sumOfInwentarzPerPracownik from './queries/sumOfInwentarzPerPracownik';

export const mainQuery = async () => {
    const db = await connectToDatabase();
    initializeCollections(db);
    await executeAndPrintAggregationQuery(COLLECTIONS.inwentarz, sumOfInwentarzPerPracownik);
    closeConnectionToDatabase();
};
// mainQuery();

const executeAggregationQuery = (collection: Collection, query: Document[]) => {
    return collection.aggregate(query);
};

const printAggregationQueryResults = async (queryResult: AggregationCursor): Promise<void> => {
    for await (const doc of queryResult) {
        console.log(doc);
    }
};

const executeAndPrintAggregationQuery = (collection: Collection, query: Document[]) => {
    return printAggregationQueryResults(executeAggregationQuery(collection, query));
};

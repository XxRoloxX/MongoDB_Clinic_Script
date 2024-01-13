import { connectToDatabase, closeConnectionToDatabase } from '../services/Database.service';
import { Document, Collection, AggregationCursor, FindCursor } from 'mongodb';
import { COLLECTIONS, initializeCollections, DatabaseCollections } from '../types/CollectionDocumentMapping';
import sumOfInwentarzPerPracownik from './queries/sumOfInwentarzPerPracownik';
import sumOfWyplatyPracownika from './queries/sumOfWyplatyPracownikow';

export const mainQuery = async () => {
    const db = await connectToDatabase();
    initializeCollections(db);
    // await executeAndPrintAggregationQuery(COLLECTIONS.inwentarz, sumOfInwentarzPerPracownik);
    await executeAndPrintAggregationQuery(COLLECTIONS.pracownicyAdministracji, sumOfWyplatyPracownika);
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

const executeFindQuery = (collection: Collection, query: Document) => {
    return collection.find(query);
};

const printFindQueryResults = async (queryResult: FindCursor): Promise<void> => {
    for await (const doc of queryResult) {
        console.log(doc);
    }
};

const executeAndPrintAggregationQuery = (collection: Collection, query: Document[]) => {
    return printAggregationQueryResults(executeAggregationQuery(collection, query));
};
const executeAndPrintFindQuery = (collection: Collection, query: Document) => {
    return printFindQueryResults(executeFindQuery(collection, query));
};

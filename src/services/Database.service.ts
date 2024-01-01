// External Dependencies
import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
// Global Variables
import { DatabaseCollections } from '../types/CollectionDocumentMapping';

export const collections: DatabaseCollections = {};
// Initialize Connection

export async function connectToDatabase() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    const inwentarzCollection: mongoDB.Collection = db.collection(process.env.INWENTARZ_COLLECTION);

    const pracownicyAdministracjiCollection: mongoDB.Collection = db.collection(
        process.env.PRACOWNICY_ADMINISTRACJI_COLLECTION,
    );

    collections.inwentarz = inwentarzCollection;
    collections.pracownicyAdministracji = pracownicyAdministracjiCollection;

    console.log(
        `Successfully connected to database: ${db.databaseName} and collection: ${inwentarzCollection.collectionName}`,
    );
    //   await client.close();
}

// External Dependencies
import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
// Global Variables

let client: mongoDB.MongoClient;

// Initialize Connection

export async function connectToDatabase() {
    dotenv.config();

    client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    // const inwentarzCollection: mongoDB.Collection = db.collection(process.env.INWENTARZ_COLLECTION);

    // const pracownicyAdministracjiCollection: mongoDB.Collection = db.collection(
    //     process.env.PRACOWNICY_ADMINISTRACJI_COLLECTION,
    // );

    // collections.inwentarz = inwentarzCollection;
    // collections.pracownicyAdministracji = pracownicyAdministracjiCollection;

    console.log(`Successfully connected to database: ${db.databaseName}`);
    return db;
}

export function closeConnectionToDatabase() {
    return client.close();
}

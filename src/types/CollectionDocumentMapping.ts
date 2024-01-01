import mongoDB from 'mongodb';
import generatePracownikasAdministracji from '../services/Generators/PracownicyAdministracjiGenerator';
import generateRecepjonistas from '../services/Generators/RecepcjonistaGenerator';
import generateInwentarz from '../services/Generators/InwentarzGenerator';
import { Document } from 'mongodb';

//USE THIS OBJECT GLOBALLY TO ACCESS YOUR COLLECTIONS
export const COLLECTIONS: DatabaseCollections = {};

//PUT NAMES OF YOUR COLLECTIONS HERE !!!

export interface DatabaseCollections {
    readonly inwentarz?: mongoDB.Collection;
    readonly pracownicyAdministracji?: mongoDB.Collection;
    readonly recepcjonisci?: mongoDB.Collection;
}

// PUT YOUR GENERATORS HERE !!!
// ORDER MATTERS !!!
// FIRST COLLECTION WILL BE GENERATED FIRST !!!

export const GeneratorCollectionMapping: GenerationDetails[] = [
    {
        generatorFunction: generatePracownikasAdministracji,
        numberOfEntities: 1000,
        collectionName: 'pracownicyAdministracji',
    },
    {
        generatorFunction: generateRecepjonistas,
        numberOfEntities: 1000,
        collectionName: 'recepcjonisci',
    },
    {
        generatorFunction: generateInwentarz,
        numberOfEntities: 10000,
        collectionName: 'inwentarz',
    },
];

interface GenerationDetails<T = Document[] | Promise<Document[]>> {
    generatorFunction: GeneratorFunctionType<T>;
    numberOfEntities: number;
    collectionName: keyof DatabaseCollections;
}

type GeneratorFunctionType<T> = (numberOfEntities: number) => Promise<T> | T;

export const initializeCollections = (db: mongoDB.Db) => {
    const collectionsList = GeneratorCollectionMapping.map(({ collectionName }) => db.collection(collectionName));

    collectionsList.forEach((collection) => {
        COLLECTIONS[collection.collectionName] = collection;
    });
};

export const generateDocumentsFromMapping = async (db: mongoDB.Db) => {
    initializeCollections(db);
    //SYNCHRONOUS GENERATION
    for (const { collectionName, generatorFunction, numberOfEntities } of GeneratorCollectionMapping) {
        const collection = COLLECTIONS[collectionName];
        const entities = await generatorFunction(numberOfEntities);
        await collection.insertMany(entities);
        console.log(`Successfully generated ${numberOfEntities} entities in ${collectionName}`);
    }

    //ASYNCHRONOUS GENERATION

    // await Promise.all(
    //     Object.entries(GeneratorCollectionMapping).map(
    //         async ([collectionName, { generatorFunction, numberOfEntities }]) => {
    //             const entities = await generatorFunction(numberOfEntities);
    //             const collection = db.collection(collectionName);
    //             await collection.insertMany(entities);
    //             console.log(`Successfully generated ${numberOfEntities} entities in ${collectionName}`);
    //         },
    //     ),
    // );
};

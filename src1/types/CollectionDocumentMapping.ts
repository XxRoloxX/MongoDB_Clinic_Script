import mongoDB from 'mongodb';
import generatePracownikasAdministracji from '../services/Generators/PracownicyAdministracjiGenerator';
import generateRecepjonistas from '../services/Generators/RecepcjonistaGenerator';
import generateInwentarz from '../services/Generators/InwentarzGenerator';
import { Document } from 'mongodb';
import generateKontrakt from '../services/Generators/KontraktGenerator';
import generateLekarzes from '../services/Generators/LekarzGenerator';
import generateChorobas from '../services/Generators/ChorobaGenerator';
import generateJednostkaChorobowas from '../services/Generators/JednostkaChorobowaGenerator';
import generatePacjentas from '../services/Generators/PacjentGenerator';
import generateProceduraMedycznas from '../services/Generators/ProceduraMedycznaGenerator';
import generateRecepty from '../services/Generators/ReceptaGenerator';
import generateSkierowania from '../services/Generators/SkierowanieGenerator';
import generateTerminy from '../services/Generators/TerminGenerator';
//USE THIS OBJECT GLOBALLY TO ACCESS YOUR COLLECTIONS
export const COLLECTIONS: DatabaseCollections = {};

//PUT NAMES OF YOUR COLLECTIONS HERE !!!

export interface DatabaseCollections {
    readonly inwentarz?: mongoDB.Collection;
    readonly pracownicyAdministracji?: mongoDB.Collection;
    readonly recepcjonisci?: mongoDB.Collection;
    readonly kontrakt?: mongoDB.Collection;
    readonly lekarze?: mongoDB.Collection
    readonly kartyChorob?: mongoDB.Collection;
    readonly jednostkiChorobowe?: mongoDB.Collection;
    readonly pacjenci?: mongoDB.Collection;
    readonly choroby?: mongoDB.Collection;
    readonly proceduryMedyczne?: mongoDB.Collection;
    readonly skierowania?: mongoDB.Collection;
    readonly recepty?: mongoDB.Collection;
    readonly terminy?: mongoDB.Collection;
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
        numberOfEntities: 1000,
        collectionName: 'inwentarz',
    },
    {
        generatorFunction: generateKontrakt,
        numberOfEntities: 1000,
        collectionName: 'kontrakt',
    },
    {
        generatorFunction: generateKontrakt,
        numberOfEntities: 10000,
        collectionName: 'kontrakt',
    },
    {
        generatorFunction: generateJednostkaChorobowas,
        numberOfEntities: 100,
        collectionName: 'jednostkiChorobowe'
    }
    ,
    {
        generatorFunction: generatePacjentas,
        numberOfEntities: 5000,
        collectionName: 'pacjenci'
    },
    {
        generatorFunction: generateLekarzes,
        numberOfEntities: 1000,
        collectionName: 'lekarze'
    },
    {
        generatorFunction: generateChorobas,
        numberOfEntities: 10000,
        collectionName: 'choroby'
    },
    {
        generatorFunction: generateProceduraMedycznas,
        numberOfEntities: 100,
        collectionName: 'proceduryMedyczne'
    },
    {
        generatorFunction: generateSkierowania,
        numberOfEntities: 5000,
        collectionName: 'skierowania'
    },

    {
        generatorFunction: generateRecepty,
        numberOfEntities: 3000,
        collectionName: 'recepty'
    },

    {
        generatorFunction: generateTerminy,
        numberOfEntities: 5000,
        collectionName: 'terminy'
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

import { JednostkaChorobowa } from '../../../models/JednostkaChorobowa';
import generateRandomEntity from './GenerateRandomEntityFromRepository';
import { OptionalId } from 'mongodb';
import { COLLECTIONS } from '../../../types/CollectionDocumentMapping';

export async function generateRandomJednostkaChorobowaFromRepository(n: number) {
    const jednostkiChorobowe = await generateRandomEntity(COLLECTIONS.jednostkiChorobowe, n);

    return jednostkiChorobowe as OptionalId<JednostkaChorobowa>[];
}

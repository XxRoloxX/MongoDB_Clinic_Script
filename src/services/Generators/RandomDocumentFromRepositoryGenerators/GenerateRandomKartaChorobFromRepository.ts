import  KartaChorob from '../../../models/KartaChorob';
import generateRandomEntity from './GenerateRandomEntityFromRepository';
import { OptionalId } from 'mongodb';
import { COLLECTIONS } from '../../../types/CollectionDocumentMapping';

export async function generateRandomKartaChorobFromRepository(n: number) {
    const kartyChorob = await generateRandomEntity(COLLECTIONS.kartyChorob, n);

    return kartyChorob as OptionalId<KartaChorob>[];
}

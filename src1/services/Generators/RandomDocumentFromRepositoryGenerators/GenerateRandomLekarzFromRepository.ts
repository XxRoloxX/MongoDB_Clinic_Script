import { Lekarz } from '../../../models/Lekarz';
import generateRandomEntity from './GenerateRandomEntityFromRepository';
import { OptionalId } from 'mongodb';
import { COLLECTIONS } from '../../../types/CollectionDocumentMapping';

export async function generateRandomLekarzFromRepository(n: number) {
    const lekarze = await generateRandomEntity(COLLECTIONS.lekarze, n);

    return lekarze as OptionalId<Lekarz>[];
}
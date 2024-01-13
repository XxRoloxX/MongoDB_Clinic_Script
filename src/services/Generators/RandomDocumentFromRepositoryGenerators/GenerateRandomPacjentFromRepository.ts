import { Pacjent } from '../../../models/Pacjent';
import generateRandomEntity from './GenerateRandomEntityFromRepository';
import { OptionalId } from 'mongodb';
import { COLLECTIONS } from '../../../types/CollectionDocumentMapping';

export async function generateRandomPacjentFromRepository(n: number) {
    const pracownicy = await generateRandomEntity(COLLECTIONS.pacjenci, n);

    return pracownicy as OptionalId<Pacjent>[];
}

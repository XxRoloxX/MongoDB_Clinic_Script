import { PracownikAdministracji } from '../../../models/PracownikAdministracji';
import generateRandomEntity from './GenerateRandomEntityFromRepository';
import { OptionalId } from 'mongodb';
import { COLLECTIONS } from '../../../types/CollectionDocumentMapping';

export async function generateRandomPracownikAdministracjiFromRepository(n: number) {
    const pracownicy = await generateRandomEntity(COLLECTIONS.pracownicyAdministracji, n);

    return pracownicy as OptionalId<PracownikAdministracji>[];
}

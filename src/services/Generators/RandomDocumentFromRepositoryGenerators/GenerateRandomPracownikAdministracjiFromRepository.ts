import { PracownikAdministracji } from '../../../models/PracownikAdministracji';
import generateRandomEntity from './GenerateRandomEntityFromRepository';
import { collections } from '../../Database.service';
import { OptionalId } from 'mongodb';

export async function generateRandomPracownikAdministracjiFromRepository(n: number) {
    const pracownicy = await generateRandomEntity(collections.pracownicyAdministracji, n);

    return pracownicy as OptionalId<PracownikAdministracji>[];
}

import { ProceduraMedyczna } from '../../../models/ProceduraMedyczna';
import generateRandomEntity from './GenerateRandomEntityFromRepository';
import { OptionalId } from 'mongodb';
import { COLLECTIONS } from '../../../types/CollectionDocumentMapping';

export async function generateRandomProceduraMedycznaFromRepository(n: number) {
    const proceduryMedyczne = await generateRandomEntity(COLLECTIONS.proceduryMedyczne, n);

    return proceduryMedyczne as OptionalId<ProceduraMedyczna>[];
}
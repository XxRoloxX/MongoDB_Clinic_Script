import { faker } from '@faker-js/faker';
import { Skierowanie, SkierowanieBuilder } from '../../models/Skierowanie';
import generatePacjent from './PacjentGenerator';
import generateLekarz from './LekarzGenerator';
import generateProceduraMedyczna from './ProceduraMedycznaGenerator';
import syncGenerator from '../../utils/SyncDocumentGenerator';
import asyncGenerator from '../../utils/AsyncDocumentGenerator';
import { getIdsOfDocuments } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomEntityFromRepository";
import { generateRandomPacjentFromRepository } from './RandomDocumentFromRepositoryGenerators/GenerateRandomPacjentFromRepository';
import { generateRandomLekarzFromRepository } from './RandomDocumentFromRepositoryGenerators/GenerateRandomLekarzFromRepository';
import { generateRandomProceduraMedycznaFromRepository } from './RandomDocumentFromRepositoryGenerators/GenerateRandomProceduraMedycznaFromRepository';

const generateSingleSkierowanie = async () => {
    const pacjent = await generateRandomPacjentFromRepository(1);
    const lekarz = await generateRandomLekarzFromRepository(1);
    const proceduraMedyczna = await generateRandomProceduraMedycznaFromRepository(1);

    const skierowanieBuilder = new SkierowanieBuilder()
        .setDataWystawienia(faker.date.past())
        .setIdPacjenta((getIdsOfDocuments(pacjent)[0]))
        .setIdLekarza((getIdsOfDocuments(lekarz)[0]))
        .setIdProceduryMedycznej((getIdsOfDocuments(proceduraMedyczna)[0]))

        return skierowanieBuilder.build();
};

const generateSkierowanie = asyncGenerator<Skierowanie>(generateSingleSkierowanie);

export default generateSkierowanie;
import { faker } from '@faker-js/faker';
import { Termin, TerminBuilder } from '../../models/Termin';
import generatePacjent from './PacjentGenerator';
import generateLekarz from './LekarzGenerator';
import syncGenerator from '../../utils/SyncDocumentGenerator';
import asyncGenerator from '../../utils/AsyncDocumentGenerator';
import { getIdsOfDocuments } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomEntityFromRepository";
import { generateRandomPacjentFromRepository } from './RandomDocumentFromRepositoryGenerators/GenerateRandomPacjentFromRepository';
import { generateRandomLekarzFromRepository } from './RandomDocumentFromRepositoryGenerators/GenerateRandomLekarzFromRepository';

const generateSingleTermin = async () => {
    const pacjent = await generateRandomPacjentFromRepository(1);
    const lekarz = await generateRandomLekarzFromRepository(1);
    const status = getStatus();

    const terminBuilder = new TerminBuilder()
        .setStatus(status)
        .setDataOd(faker.date.past())
        .setIdLekarza((getIdsOfDocuments(lekarz)[0]))
        if (status === 'zajęty') {
            terminBuilder.setIdPacjenta(getIdsOfDocuments(pacjent)[0]);
        } else {
            terminBuilder.setIdPacjenta(null);
        }

        return terminBuilder.build();
};

const statusy: string[] = [
    'zajęty',
    'wolny',
    
  ];
  
  const getStatus = () => {    
    return statusy[faker.number.int({ min: 0, max: statusy.length - 1 })]
}
  
  

const generateTermin = asyncGenerator<Termin>(generateSingleTermin);

export default generateTermin;
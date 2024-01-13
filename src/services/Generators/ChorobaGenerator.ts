import { faker } from "@faker-js/faker";
import { generateRandomJednostkaChorobowaFromRepository } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomJednostkaChorobowaFromRepository";
import { generateRandomKartaChorobFromRepository } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomKartaChorobFromRepository";
import { ChorobaBuilder } from "../../models/Choroba";
import Choroba from "../../models/Choroba";
import asyncGenerator from '../../utils/AsyncDocumentGenerator';
import { getIdsOfDocuments } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomEntityFromRepository";
import Przebieg, { PrzebiegBuilder } from "../../models/Przebieg";
import syncGenerator from '../../utils/SyncDocumentGenerator';
import { generateRandomPacjentFromRepository } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomPacjentFromRepository";


const generateSingleChoroba = async () => {
    const jednostkaChorobowa = await generateRandomJednostkaChorobowaFromRepository(1);
    const pacjent = await generateRandomPacjentFromRepository(1);
    const status = getStatus();
    const chorobaBuilder = new ChorobaBuilder()
        .setDataRozpoczecia(faker.date.past())
        .setDataZakonczenia(null)
        .setZalecaneLeczenie(faker.lorem.sentence())
        .setStatus(status)
        .setPrzebieg(generateMultiplePrzebieg())
        .setIdJednostkiChorobowej(getIdsOfDocuments(jednostkaChorobowa)[0]) 
        .setIdPacjenta(getIdsOfDocuments(pacjent)[0]); 
        if (status === 'wyleczona') {
            chorobaBuilder.setDataZakonczenia(faker.date.future())
        } else {
            chorobaBuilder.setDataZakonczenia(null);
        }

    return chorobaBuilder.build();
};

const generatePrzebieg = () => {
    const przebiegBuilder = new PrzebiegBuilder()
        .setPodjeteDzialania(faker.lorem.sentence())
        .setNotatki(faker.lorem.sentence())
        .setZalecenia(faker.lorem.sentence());

    return przebiegBuilder.build();
};

const statusy: string[] = [
    'wyleczona',
    'w remisji',
    'zaostrzona'
  ];
  
  const getStatus = () => {    
    return statusy[faker.number.int({ min: 0, max: statusy.length - 1 })]
}

const generateMultiplePrzebieg = () =>
    syncGenerator<Przebieg>(generatePrzebieg)(faker.number.int({ min: 1, max: 5 }));

const generateChoroba = asyncGenerator<Choroba>(generateSingleChoroba);

export default generateChoroba;

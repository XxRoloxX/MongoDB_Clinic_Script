import { faker } from '@faker-js/faker';
import { ReceptaBuilder } from '../../models/Recepta';
import Recepta from '../../models/Recepta';
import generatePacjent from './PacjentGenerator';
import generateLekarz from './LekarzGenerator';
import syncGenerator from '../../utils/SyncDocumentGenerator';
import asyncGenerator from '../../utils/AsyncDocumentGenerator';
import { getIdsOfDocuments } from "./RandomDocumentFromRepositoryGenerators/GenerateRandomEntityFromRepository";
import { generateRandomPacjentFromRepository } from './RandomDocumentFromRepositoryGenerators/GenerateRandomPacjentFromRepository';
import { generateRandomLekarzFromRepository } from './RandomDocumentFromRepositoryGenerators/GenerateRandomLekarzFromRepository';

const generateSingleRecepta = async () => {
    const pacjent = await generateRandomPacjentFromRepository(1);
    const lekarz = await generateRandomLekarzFromRepository(1);

    const receptaBuilder = new ReceptaBuilder()
        .setDataWystawienia(faker.date.past())
        .setListaLekow(getListaLekow())
        .setInstrukcje(faker.lorem.sentence())
        .setUwagi(faker.lorem.sentence())
        .setIdPacjenta((getIdsOfDocuments(pacjent)[0]))
        .setIdLekarza((getIdsOfDocuments(lekarz)[0]))
        

        return receptaBuilder.build();
};

const listaLekow: string[] = [
    'Paracetamol, Ibuprofen',
    'Aspirin, Omeprazole',
    'Metformin, Insulin',
    'Lisinopril, Amlodipine',
    'Atorvastatin',
    'Levothyroxine, Liothyronine',
    'Cetirizine',
    'Amoxicillin, Cephalexin',
    'Diazepam, Alprazolam',
    'Warfarin, Rivaroxaban',
    'Losartan',
    'Metoprolol, Propranolol',
    'Escitalopram',
    'Prednisone, Hydrocortisone',
    'Ranitidine',
    'Furosemide, Hydrochlorothiazide',
    'Clopidogrel, Aspirin',
    'Montelukast, Fluticasone',
    'Duloxetine',
    'Olanzapine, Quetiapine',
    'Metronidazole',
    'Methylphenidate, Atomoxetine',
    'Clonazepam, Gabapentin',
    'Enalapril',
    'Hydralazine, Isosorbide',
    'Morphine, Oxycodone',
    'Allopurinol, Colchicine',
    'Carvedilol, Nebivolol',
    'Lorazepam'
  ];
  
  const getListaLekow = () => {    
    return listaLekow[faker.number.int({ min: 0, max: listaLekow.length })]
}
  

const generateRecepta = asyncGenerator<Recepta>(generateSingleRecepta);

export default generateRecepta;